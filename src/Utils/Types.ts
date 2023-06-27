export interface loginFormData {
  email: string;
  password: string;
}

export interface signupFormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface profile {
  profilePhoto: string;
  firstname: string;
  lastname: string;
  jobtitle: string;
  about: string;
}
export interface contact {
  mobileno: string;
  email: string;
  website: string;
  address: string;
}
export interface experience {
  id: string;
  title: string;
  startedYear: string | number;
  endedYear: string | number;
  jobTitle: string;
  companyName: string;
  desc: string;
}
export interface degree {
  id: string;
  title: string;
  startedYear: string;
  endedYear: string;
  courseName: string;
  university: string;
  desc: string;
}
export interface skill {
  id: string;
  name: string;
}
export interface language {
  id: string;
  name: string;
}
export interface interest {
  id: string;
  name: string;
}
export interface resume {
  id: string;
  resume_title: string;
  userId: string;
  color: string;
  resumeData: {
    profileInfo: profile;
    contacts: contact;
    experiences: experience[];
    education: degree[];
    skills: skill[];
    interests: interest[];
    languages: language[];
  };
}
