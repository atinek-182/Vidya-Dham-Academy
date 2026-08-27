import React, { useState, useRef, useEffect, useCallback } from 'react';
import { InputField } from './InputField';
import { GradeSelector } from './GradeSelector';
import { toast } from '../Toaster';

export interface ReservationData {
  studentName: string;
  parentPhone: string;
  grade: string;
  academicTrack: string;
  allottedSlot: string;
  tokenNumber: string;
}

export interface AdmissionsFormProps {
  claimedSeats?: number;
  totalSeats?: number;
  onSuccess?: (data: ReservationData) => void;
  className?: string;
}

interface FormState {
  studentName: string;
  parentPhone: string;
  grade: string;
  academicTrack: string;
}

interface FormErrors {
  studentName?: string;
  parentPhone?: string;
  grade?: string;
}

interface TouchedFields {
  studentName?: boolean;
  parentPhone?: boolean;
  grade?: boolean;
}

// VibeSec Client-Side Input Sanitizer
const sanitizeText = (input: string): string => {
  return input
    .replace(/<[^>]*>?/gm, '') // Strip HTML tags
    .replace(/[^\w\s.,'-]/gi, '') // Strip potential injection/special chars
    .trim();
};

const sanitizePhoneDigits = (input: string): string => {
  return input.replace(/\D/g, '').slice(0, 10);
};

export const AdmissionsForm: React.FC<AdmissionsFormProps> = ({
  claimedSeats = 19,
  totalSeats = 25,
  onSuccess,
  className = '',
}) => {
  const [formData, setFormData] = useState<FormState>({
    studentName: '',
    parentPhone: '',
    grade: 'Grade 11',
    academicTrack: 'IIT-JEE Main + Advanced',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<TouchedFields>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedReservation, setConfirmedReservation] = useState<ReservationData | null>(null);

  // Field DOM References for Keyboard Focus Management
  const nameInputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Clean up debounce timer on unmount
  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  // Validation Logic
  const validateField = useCallback((field: keyof FormState, value: string): string | undefined => {
    switch (field) {
      case 'studentName': {
        const trimmed = value.trim();
        if (!trimmed) {
          return 'Student full name is required for classroom attendance registration.';
        }
        if (trimmed.length < 2) {
          return 'Please enter a valid student name (minimum 2 characters).';
        }
        if (!/^[a-zA-Z\s.'-]+$/.test(trimmed)) {
          return 'Student name should only contain letters and standard punctuation.';
        }
        return undefined;
      }
      case 'parentPhone': {
        const digits = sanitizePhoneDigits(value);
        if (!digits) {
          return 'Parent WhatsApp mobile number is required for seat pass confirmation.';
        }
        if (digits.length !== 10) {
          return `Please enter a 10-digit Indian mobile number (${digits.length}/10 entered).`;
        }
        if (!/^[6-9]\d{9}$/.test(digits)) {
          return 'Please enter an active mobile number starting with 6, 7, 8, or 9.';
        }
        return undefined;
      }
      case 'grade': {
        if (!value) {
          return 'Please select the student\'s upcoming academic grade.';
        }
        return undefined;
      }
      default:
        return undefined;
    }
  }, []);

  const validateAll = useCallback((): { isValid: boolean; newErrors: FormErrors } => {
    const nameErr = validateField('studentName', formData.studentName);
    const phoneErr = validateField('parentPhone', formData.parentPhone);
    const gradeErr = validateField('grade', formData.grade);

    const newErrors: FormErrors = {};
    if (nameErr) newErrors.studentName = nameErr;
    if (phoneErr) newErrors.parentPhone = phoneErr;
    if (gradeErr) newErrors.grade = gradeErr;

    return {
      isValid: Object.keys(newErrors).length === 0,
      newErrors,
    };
  }, [formData, validateField]);

  // Real-time Debounced (300ms) Re-validation for touched fields
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value;
    setFormData((prev) => ({ ...prev, studentName: rawVal }));

    if (touched.studentName) {
      if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
      debounceTimerRef.current = setTimeout(() => {
        const err = validateField('studentName', rawVal);
        setErrors((prev) => ({ ...prev, studentName: err }));
      }, 300);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value;
    const digitsOnly = sanitizePhoneDigits(rawVal);
    setFormData((prev) => ({ ...prev, parentPhone: digitsOnly }));

    if (touched.parentPhone) {
      if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
      debounceTimerRef.current = setTimeout(() => {
        const err = validateField('parentPhone', digitsOnly);
        setErrors((prev) => ({ ...prev, parentPhone: err }));
      }, 300);
    }
  };

  const handleGradeChange = (newGrade: string) => {
    setFormData((prev) => ({
      ...prev,
      grade: newGrade,
      academicTrack:
        newGrade === 'Grade 11' || newGrade === 'Grade 12'
          ? 'IIT-JEE Main + Advanced'
          : 'STEM Foundation Olympiad',
    }));

    if (touched.grade) {
      setErrors((prev) => ({ ...prev, grade: undefined }));
    }
  };

  // Blur Handler: Immediate Validation on Focus Shift
  const handleBlur = (field: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const err = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: err }));
  };

  // Form Submit Handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({
      studentName: true,
      parentPhone: true,
      grade: true,
    });

    const { isValid, newErrors } = validateAll();
    setErrors(newErrors);

    if (!isValid) {
      // Programmatic Focus Retention on First Failing Field
      if (newErrors.studentName && nameInputRef.current) {
        nameInputRef.current.focus();
      } else if (newErrors.parentPhone && phoneInputRef.current) {
        phoneInputRef.current.focus();
      }

      toast.error('Please resolve the highlighted field errors before reserving.', {
        description: 'Ensure student name and a valid 10-digit Indian WhatsApp number are provided.',
      });
      return;
    }

    // Atomic Submission Lock
    setIsSubmitting(true);

    try {
      // Deterministic Mock Network Latency (600ms)
      await new Promise((resolve) => setTimeout(resolve, 600));

      const reservation: ReservationData = {
        studentName: sanitizeText(formData.studentName),
        parentPhone: '+91 ' + formData.parentPhone,
        grade: formData.grade,
        academicTrack: formData.academicTrack,
        allottedSlot: 'Upcoming Saturday • 10:30 AM IST (Classroom 1)',
        tokenNumber: `VD-${Math.floor(1000 + Math.random() * 9000)}`,
      };

      setConfirmedReservation(reservation);
      if (onSuccess) onSuccess(reservation);

      toast.success('Saturday Classroom Visit Confirmed!', {
        description: `Seat pass issued for ${reservation.studentName} (${reservation.tokenNumber}).`,
      });
    } catch {
      toast.error('Reservation transmission interrupted.', {
        description: 'Please check your connection and retry or contact the campus desk directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setConfirmedReservation(null);
    setFormData({
      studentName: '',
      parentPhone: '',
      grade: 'Grade 11',
      academicTrack: 'IIT-JEE Main + Advanced',
    });
    setErrors({});
    setTouched({});
  };

  // SUCCESS CONFIRMATION RECEIPT VIEW
  if (confirmedReservation) {
    return (
      <div
        role="region"
        aria-label="Classroom Visit Reservation Confirmed"
        className={`p-8 sm:p-10 rounded-3xl bg-[#0b0f19] border border-amber-500/40 shadow-2xl space-y-6 ${className}`}
      >
        {/* Receipt Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.10]">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                [PASS] SEAT PASS RESERVED
              </span>
              <span className="text-xs font-mono text-slate-400">
                {confirmedReservation.tokenNumber}
              </span>
            </div>
            <h3 className="text-2xl font-bold font-serif text-white">
              Official Classroom Observation Pass
            </h3>
          </div>
          <div className="text-right font-mono text-xs text-slate-400">
            Cohort 2026-27 &bull; {claimedSeats + 1}/{totalSeats} Claimed
          </div>
        </div>

        {/* Receipt Ledger Table */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-[#05070c] border border-white/[0.08] text-sm">
          <div>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
              Registered Student
            </span>
            <span className="font-semibold text-white text-base">
              {confirmedReservation.studentName}
            </span>
          </div>
          <div>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
              Cohort & Grade
            </span>
            <span className="font-semibold text-amber-400 text-base">
              {confirmedReservation.grade} &bull; {confirmedReservation.academicTrack}
            </span>
          </div>
          <div>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
              Parent Contact Desk
            </span>
            <span className="font-mono text-slate-200">
              {confirmedReservation.parentPhone}
            </span>
          </div>
          <div>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
              Allotted Session Timing
            </span>
            <span className="font-mono text-emerald-400">
              {confirmedReservation.allottedSlot}
            </span>
          </div>
        </div>

        {/* Institutional Directive */}
        <div className="p-4 rounded-xl bg-amber-500/[0.04] border border-amber-500/20 text-xs text-slate-300 space-y-2">
          <p className="font-mono text-amber-300 font-semibold uppercase tracking-wider">
            [INFO] What To Expect On Saturday
          </p>
          <p className="leading-relaxed">
            Please arrive 15 minutes prior to 10:30 AM with your child. A complimentary printed Snell&apos;s law concept booklet and session evaluation sheet will be handed to you at Campus Desk One.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <a
            href={`https://wa.me/919876543210?text=Hello%20Vidya%20Dham%20Desk%2C%20confirming%20visit%20token%20${confirmedReservation.tokenNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto h-12 px-6 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <span>[SYNC] Open WhatsApp Desk Direct</span>
          </a>
          <button
            type="button"
            onClick={handleReset}
            className="w-full sm:w-auto h-12 px-6 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] text-slate-300 hover:text-white font-mono text-xs uppercase tracking-wider transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            Reserve Another Seat
          </button>
        </div>
      </div>
    );
  }

  // ACTIVE INTAKE FORM VIEW
  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Admissions Classroom Visit Reservation Form"
      className={`space-y-5 ${className}`}
    >
      {/* 1. Grade Selector Primitive */}
      <GradeSelector
        label="Select Student Grade"
        selectedGrade={formData.grade}
        onChange={handleGradeChange}
        error={touched.grade ? errors.grade : undefined}
        disabled={isSubmitting}
      />

      {/* 2. Student Name Primitive */}
      <InputField
        ref={nameInputRef}
        id="student-full-name"
        name="studentName"
        type="text"
        label="Student Full Name"
        placeholder="e.g. Aarav Sharma"
        value={formData.studentName}
        onChange={handleNameChange}
        onBlur={() => handleBlur('studentName')}
        error={touched.studentName ? errors.studentName : undefined}
        isValid={touched.studentName && !errors.studentName && formData.studentName.length >= 2}
        helperText="Required for official roll allocation and printed session notes."
        isRequired
        disabled={isSubmitting}
        maxLength={60}
        autoComplete="name"
      />

      {/* 3. Parent WhatsApp Contact Primitive */}
      <InputField
        ref={phoneInputRef}
        id="parent-contact-phone"
        name="parentPhone"
        type="tel"
        label="Parent WhatsApp Mobile Number"
        placeholder="10-digit mobile number"
        prefixText="+91"
        value={formData.parentPhone}
        onChange={handlePhoneChange}
        onBlur={() => handleBlur('parentPhone')}
        error={touched.parentPhone ? errors.parentPhone : undefined}
        isValid={touched.parentPhone && !errors.parentPhone && formData.parentPhone.length === 10}
        helperText="Seat pass and campus directions will be sent directly via WhatsApp."
        isRequired
        disabled={isSubmitting}
        maxLength={10}
        autoComplete="tel-national"
        inputMode="numeric"
      />

      {/* 4. Academic Track Pill Display */}
      <div className="p-3 rounded-lg bg-[#05070c] border border-white/[0.08] flex items-center justify-between text-xs font-mono">
        <span className="text-slate-400">Curriculum Focus:</span>
        <span className="text-amber-400 font-bold">{formData.academicTrack}</span>
      </div>

      {/* 5. Primary Conversion Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
        className={`w-full h-12 rounded-lg font-mono text-xs uppercase tracking-wider font-bold transition-all duration-150 flex items-center justify-center gap-2 outline-none
          ${
            isSubmitting
              ? 'bg-amber-500/70 text-[#05070c] cursor-wait pointer-events-none'
              : 'bg-amber-500 hover:bg-amber-400 text-[#05070c] shadow-[0_4px_16px_rgba(245,158,11,0.25)] hover:shadow-[0_6px_20px_rgba(245,158,11,0.35)] active:scale-[0.97] cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070c]'
          }
        `}
      >
        {isSubmitting ? (
          <>
            <span className="w-4 h-4 border-2 border-[#05070c] border-t-transparent rounded-full animate-spin" />
            <span>[SYNC] Reserving Saturday Seat...</span>
          </>
        ) : (
          <span>Reserve Saturday Classroom Observation</span>
        )}
      </button>

      {/* 6. Institutional Privacy Guarantee */}
      <div className="pt-1 text-center space-y-1">
        <p className="text-[11px] font-mono text-slate-500">
          [PASS] Direct Faculty Desk &bull; Zero Telemarketing Resale &bull; Strictly 25 Seats
        </p>
        <p className="text-[10px] font-mono text-slate-600">
          Current Cohort Telemetry: {claimedSeats}/{totalSeats} Claimed
        </p>
      </div>
    </form>
  );
};

export default AdmissionsForm;
