import { whatsappLink } from "../constants/config";

export interface RegistrationData {
  studentName: string;
  parentName: string;
  mobile: string;
  age: string;
  gender: string;
  program: string;
  previousExperience: string;
  preferredBatch: string;
  address: string;
  notes: string;
}

export function buildRegistrationMessage(data: RegistrationData): string {
  return [
    "🏏 New Student Registration",
    "",
    `Student Name: ${data.studentName}`,
    `Parent Name: ${data.parentName}`,
    `Mobile: ${data.mobile}`,
    `Age: ${data.age}`,
    `Gender: ${data.gender}`,
    `Program: ${data.program}`,
    `Previous Experience: ${data.previousExperience}`,
    `Preferred Batch: ${data.preferredBatch}`,
    `Address: ${data.address}`,
    `Additional Notes: ${data.notes || "-"}`,
  ].join("\n");
}

export function buildRegistrationWhatsappLink(data: RegistrationData): string {
  return whatsappLink(buildRegistrationMessage(data));
}
