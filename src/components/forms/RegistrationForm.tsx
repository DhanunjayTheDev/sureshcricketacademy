import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Button from "../ui/Button";
import { isNonEmpty, isValidAge, isValidMobile } from "../../utils/validators";
import { buildRegistrationWhatsappLink, type RegistrationData } from "../../utils/whatsapp";

const INITIAL_DATA: RegistrationData = {
  studentName: "",
  parentName: "",
  mobile: "",
  age: "",
  gender: "",
  program: "",
  previousExperience: "",
  preferredBatch: "",
  address: "",
  notes: "",
};

type Errors = Partial<Record<keyof RegistrationData, string>>;

function validate(data: RegistrationData): Errors {
  const errors: Errors = {};
  if (!isNonEmpty(data.studentName)) errors.studentName = "Student name is required.";
  if (!isNonEmpty(data.parentName)) errors.parentName = "Parent name is required.";
  if (!isValidMobile(data.mobile)) errors.mobile = "Enter a valid 10-digit mobile number.";
  if (!isValidAge(data.age)) errors.age = "Enter a valid age (4-80).";
  if (!isNonEmpty(data.gender)) errors.gender = "Please select a gender.";
  if (!isNonEmpty(data.program)) errors.program = "Please select a program.";
  if (!isNonEmpty(data.previousExperience)) errors.previousExperience = "Please select an option.";
  if (!isNonEmpty(data.preferredBatch)) errors.preferredBatch = "Please select a preferred batch.";
  if (!isNonEmpty(data.address)) errors.address = "Address is required.";
  return errors;
}

const inputClasses =
  "w-full rounded-md border border-ink-950/15 bg-white px-4 py-3 text-sm text-ink-950 placeholder:text-ink-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors";
const labelClasses = "mb-2 block text-xs font-bold uppercase tracking-wide text-ink-700";
const errorClasses = "mt-1 text-xs font-medium text-red-600";

function RadioGroup({
  legend,
  name,
  options,
  value,
  onChange,
  error,
}: {
  legend: string;
  name: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  error?: string;
}) {
  return (
    <fieldset>
      <legend className={labelClasses}>{legend}</legend>
      <div className="flex flex-wrap items-center gap-5 pt-1">
        {options.map((option) => {
          const isChecked = value === option;
          return (
            <label key={option} className="flex cursor-pointer items-center gap-2 text-sm font-medium text-ink-900">
              <span
                className={`relative flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                  isChecked ? "border-gold-500" : "border-ink-300"
                }`}
              >
                <input
                  type="radio"
                  name={name}
                  value={option}
                  checked={isChecked}
                  onChange={() => onChange(option)}
                  className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                  aria-invalid={!!error}
                />
                {isChecked && <span className="h-2.5 w-2.5 rounded-full bg-gold-500" />}
              </span>
              {option}
            </label>
          );
        })}
      </div>
      {error && <p className={errorClasses}>{error}</p>}
    </fieldset>
  );
}

export default function RegistrationForm() {
  const [data, setData] = useState<RegistrationData>(INITIAL_DATA);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof RegistrationData>(key: K, value: RegistrationData[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate(data);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    const link = buildRegistrationWhatsappLink(data);
    window.open(link, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-4 rounded-xl border border-cream-200 bg-white p-10 text-center shadow-soft"
      >
        <CheckCircle2 className="h-12 w-12 text-gold-500" aria-hidden="true" />
        <h3 className="text-xl font-extrabold uppercase text-ink-950">Almost there!</h3>
        <p className="max-w-md text-ink-700">
          Thank you! Please send the pre-filled WhatsApp message to complete your enquiry.
        </p>
        <Button
          type="button"
          variant="ghost"
          onClick={() => {
            setSubmitted(false);
            setData(INITIAL_DATA);
          }}
        >
          Submit another registration
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-6 rounded-xl border border-cream-200 bg-white p-6 shadow-soft sm:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClasses} htmlFor="studentName">
            Student Name
          </label>
          <input
            id="studentName"
            className={inputClasses}
            value={data.studentName}
            onChange={(e) => update("studentName", e.target.value)}
            aria-invalid={!!errors.studentName}
            aria-describedby={errors.studentName ? "studentName-error" : undefined}
          />
          {errors.studentName && <p id="studentName-error" className={errorClasses}>{errors.studentName}</p>}
        </div>

        <div>
          <label className={labelClasses} htmlFor="parentName">
            Parent Name
          </label>
          <input
            id="parentName"
            className={inputClasses}
            value={data.parentName}
            onChange={(e) => update("parentName", e.target.value)}
            aria-invalid={!!errors.parentName}
            aria-describedby={errors.parentName ? "parentName-error" : undefined}
          />
          {errors.parentName && <p id="parentName-error" className={errorClasses}>{errors.parentName}</p>}
        </div>

        <div>
          <label className={labelClasses} htmlFor="mobile">
            Mobile Number
          </label>
          <input
            id="mobile"
            type="tel"
            inputMode="numeric"
            className={inputClasses}
            value={data.mobile}
            onChange={(e) => update("mobile", e.target.value)}
            aria-invalid={!!errors.mobile}
            aria-describedby={errors.mobile ? "mobile-error" : undefined}
            placeholder="10-digit mobile number"
          />
          {errors.mobile && <p id="mobile-error" className={errorClasses}>{errors.mobile}</p>}
        </div>

        <div>
          <label className={labelClasses} htmlFor="age">
            Age
          </label>
          <input
            id="age"
            type="number"
            inputMode="numeric"
            className={inputClasses}
            value={data.age}
            onChange={(e) => update("age", e.target.value)}
            aria-invalid={!!errors.age}
            aria-describedby={errors.age ? "age-error" : undefined}
            placeholder="E.g. 12"
          />
          {errors.age && <p id="age-error" className={errorClasses}>{errors.age}</p>}
        </div>

        <RadioGroup
          legend="Gender"
          name="gender"
          options={["Male", "Female", "Other"]}
          value={data.gender}
          onChange={(v) => update("gender", v)}
          error={errors.gender}
        />

        <div>
          <label className={labelClasses} htmlFor="program">
            Program
          </label>
          <select
            id="program"
            className={inputClasses}
            value={data.program}
            onChange={(e) => update("program", e.target.value)}
            aria-invalid={!!errors.program}
            aria-describedby={errors.program ? "program-error" : undefined}
          >
            <option value="">Select</option>
            <option value="Kids Program">Kids Program (Age 6-15)</option>
            <option value="Adults Program">Adults Program (16+)</option>
          </select>
          {errors.program && <p id="program-error" className={errorClasses}>{errors.program}</p>}
        </div>

        <RadioGroup
          legend="Previous Cricket Experience"
          name="previousExperience"
          options={["Yes", "No"]}
          value={data.previousExperience}
          onChange={(v) => update("previousExperience", v)}
          error={errors.previousExperience}
        />

        <div>
          <label className={labelClasses} htmlFor="preferredBatch">
            Preferred Batch
          </label>
          <select
            id="preferredBatch"
            className={inputClasses}
            value={data.preferredBatch}
            onChange={(e) => update("preferredBatch", e.target.value)}
            aria-invalid={!!errors.preferredBatch}
            aria-describedby={errors.preferredBatch ? "preferredBatch-error" : undefined}
          >
            <option value="">Select</option>
            <option value="Morning">Morning Batch</option>
            <option value="Evening">Evening Batch</option>
          </select>
          {errors.preferredBatch && <p id="preferredBatch-error" className={errorClasses}>{errors.preferredBatch}</p>}
        </div>
      </div>

      <div>
        <label className={labelClasses} htmlFor="address">
          Full Address
        </label>
        <textarea
          id="address"
          rows={3}
          className={inputClasses}
          value={data.address}
          onChange={(e) => update("address", e.target.value)}
          aria-invalid={!!errors.address}
          aria-describedby={errors.address ? "address-error" : undefined}
          placeholder="Enter your full address"
        />
        {errors.address && <p id="address-error" className={errorClasses}>{errors.address}</p>}
      </div>

      <div>
        <label className={labelClasses} htmlFor="notes">
          Additional Notes (Optional)
        </label>
        <textarea
          id="notes"
          rows={3}
          className={inputClasses}
          value={data.notes}
          onChange={(e) => update("notes", e.target.value)}
          placeholder="Any specific requirements or questions?"
        />
      </div>

      <Button type="submit" size="lg" className="w-full">
        Submit Registration via WhatsApp
      </Button>
    </form>
  );
}
