export const validateForm = (formData, setError) => {
  let valid = true;
  const newErrors = {
    student_name: "",
    student_card_number: "",
    family_card_number: "",
    student_gender: "",
    place_birth: "",
    date_birth: "",
    student_address: "",
    student_address_now: "",
    student_distance: "",
    student_religion: "",
    student_blood_type: "",
    student_weight: "",
    student_height: "",
    student_child: "",
    student_kps: "",
    student_hobby: "",

    father_name: "",
    father_job: "",
    father_income: "",
    place_birth_father: "",
    father_birth: "",
    mother_name: "",
    mother_job: "",
    mother_income: "",
    place_birth_mother: "",
    mother_birth: "",
    phoneNumber_house: "",

    guardian_name: "",
    guardian_address: "",
    guardian_phone: "",
    guardian_job: "",

    school_name: "",
     school_status: "",
    school_address: "",
    ijazah_number: "",
    major_choice1: "",
    major_choice2: "",
    nisn: "",
    student_picture: "",
    studentDocument: "",

    mathematics1: "",
    mathematics2: "",
    mathematics3: "",
    mathematics4: "",
    mathematics5: "",

    science1: "",
    science2: "",
    science3: "",
    science4: "",
    science5: "",

    indonesian1: "",
    indonesian2: "",
    indonesian3: "",
    indonesian4: "",
    indonesian5: "",

    english1: "",
    english2: "",
    english3: "",
    english4: "",
    english5: "",
    interview_score: "",
    health_score: "",

  };

  if (!formData.student_name) {
    newErrors.student_name = "wajib diisi";
    valid = false;
  }
  if (!formData.student_card_number) {
    newErrors.student_card_number = "wajib diisi";
    valid = false;
  }
  if (!formData.family_card_number) {
    newErrors.family_card_number = "wajib diisi";
    valid = false;
  }
  if (!formData.student_gender) {
    newErrors.student_gender = "wajib diisi";
    valid = false;
  }
  if (!formData.place_birth) {
    newErrors.place_birth = "wajib diisi";
    valid = false;
  }
  if (!formData.date_birth) {
    newErrors.date_birth = "wajib diisi";
    valid = false;
  }
  if (!formData.student_address) {
    newErrors.student_address = "wajib diisi";
    valid = false;
  }
  if (!formData.student_address_now) {
    newErrors.student_address_now = "wajib diisi";
    valid = false;
  }
  if (!formData.student_distance) {
    newErrors.student_distance = "wajib diisi";
    valid = false;
  }
  if (!formData.student_religion) {
    newErrors.student_religion = "wajib diisi";
    valid = false;
  }
  if (!formData.student_blood_type) {
    newErrors.student_blood_type = "wajib diisi";
    valid = false;
  }
  if (!formData.student_weight) {
    newErrors.student_weight = "wajib diisi";
    valid = false;
  }
  if (!formData.student_height) {
    newErrors.student_height = "wajib diisi";
    valid = false;
  }
  if (!formData.student_child) {
    newErrors.student_child = "wajib diisi";
    valid = false;
  }
  if (!formData.student_kps) {
    newErrors.student_kps = "wajib diisi";
    valid = false;
  }
  if (!formData.student_hobby) {
    newErrors.student_hobby = "wajib diisi";
    valid = false;
  }

  if (!formData.father_name) {
    newErrors.father_name = "wajib diisi";
    valid = false;
  }
  if (!formData.father_job) {
    newErrors.father_job = "wajib diisi";
    valid = false;
  }
  if (!formData.father_income) {
    newErrors.father_income = "wajib diisi";
    valid = false;
  }
  if (!formData.place_birth_father) {
    newErrors.place_birth_father = "wajib diisi";
    valid = false;
  }
  if (!formData.mother_name) {
    newErrors.mother_name = "wajib diisi";
    valid = false;
  }
  if (!formData.mother_job) {
    newErrors.mother_job = "wajib diisi";
    valid = false;
  }
  if (!formData.mother_income) {
    newErrors.mother_income = "wajib diisi";
    valid = false;
  }
  if (!formData.place_birth_mother) {
    newErrors.place_birth_mother = "wajib diisi";
    valid = false;
  }
  if (!formData.mother_birth) {
    newErrors.mother_birth = "wajib diisi";
    valid = false;
  }
  if (!formData.phoneNumber_house) {
    newErrors.phoneNumber_house = "wajib diisi";
    valid = false;
  }
  if (!formData.school_name) {
    newErrors.school_name = "wajib diisi";
    valid = false;
  }
  if (!formData.school_status) {
    newErrors.school_status = "wajib diisi";
    valid = false;
  }
  if (!formData.school_address) {
    newErrors.school_address = "wajib diisi";
    valid = false;
  }
  if (!formData.ijazah_number) {
    newErrors.ijazah_number = "wajib diisi";
    valid = false;
  }
  if (!formData.major_choice1) {
    newErrors.major_choice1 = "wajib diisi";
    valid = false;
  }
  if (!formData.major_choice2) {
    newErrors.major_choice2 = "wajib diisi";
    valid = false;
  }
  if (!formData.nisn) {
    newErrors.nisn = "wajib diisi";
    valid = false;
  }

  if (!formData.mathematics1) {
    newErrors.mathematics1 = "wajib diisi";
    valid = false;
  }
  if (!formData.mathematics2) {
    newErrors.mathematics2 = "wajib diisi";
    valid = false;
  }
  if (!formData.mathematics3) {
    newErrors.mathematics3 = "wajib diisi";
    valid = false;
  }
  if (!formData.mathematics4) {
    newErrors.mathematics4 = "wajib diisi";
    valid = false;
  }
  if (!formData.mathematics5) {
    newErrors.mathematics5 = "wajib diisi";
    valid = false;
  }
  if (!formData.science1) {
    newErrors.science1 = "wajib diisi";
    valid = false;
  }
  if (!formData.science2) {
    newErrors.science2 = "wajib diisi";
    valid = false;
  }
  if (!formData.science3) {
    newErrors.science3 = "wajib diisi";
    valid = false;
  }
  if (!formData.science3) {
    newErrors.science3 = "wajib diisi";
    valid = false;
  }
  if (!formData.science4) {
    newErrors.science4 = "wajib diisi";
    valid = false;
  }
  if (!formData.science5) {
    newErrors.science5 = "wajib diisi";
    valid = false;
  }
  if (!formData.student_kps) {
    newErrors.student_kps = "wajib diisi";
    valid = false;
  }
  if (!formData.indonesian1) {
    newErrors.indonesian1 = "wajib diisi";
    valid = false;
  }
  if (!formData.indonesian2) {
    newErrors.indonesian2 = "wajib diisi";
    valid = false;
  }
  if (!formData.indonesian3) {
    newErrors.indonesian3 = "wajib diisi";
    valid = false;
  }
  if (!formData.indonesian4) {
    newErrors.indonesian4 = "wajib diisi";
    valid = false;
  }
  if (!formData.indonesian5) {
    newErrors.indonesian5 = "wajib diisi";
    valid = false;
  }
  if (!formData.english1) {
    newErrors.english1 = "wajib diisi";
    valid = false;
  }
  if (!formData.english2) {
    newErrors.english2 = "wajib diisi";
    valid = false;
  }
  if (!formData.english3) {
    newErrors.english3 = "wajib diisi";
    valid = false;
  }
  if (!formData.english4) {
    newErrors.english4 = "wajib diisi";
    valid = false;
  }
  if (!formData.english5) {
    newErrors.english5 = "wajib diisi";
    valid = false;
  }
  if (!formData.student_kps) {
    newErrors.student_kps = "wajib diisi";
    valid = false;
  }

  if (!formData.student_picture) {
    newErrors.student_picture = "wajib diisi";
    valid = false;
  }
  if (!formData.studentDocument) {
    newErrors.studentDocument = "wajib diisi";
    valid = false;
    // } else if(!validatePdf(formData.studentDocument)){
    //     newErrors.studentDocument = 'hanya file dengan ekstensi pdf'
    //     valid=false;
  }

  setError(newErrors);
  return valid;
};
export const dataStudent = (formData) => {
  const formStudent = {
    student_name: formData.student_name,
    student_card_number:formData.student_card_number,
    family_card_number:formData.family_card_number,
    student_gender: formData.student_gender,
    place_birth: formData.place_birth,
    date_birth: formData.date_birth,
    student_address: formData.student_address,
    student_address_now:formData.student_address_now,
    student_distance: formData.student_distance,
    student_religion: formData.student_religion,
    student_blood_type: formData.student_blood_type,
    student_weight: formData.student_weight,
    student_height: formData.student_height,
    student_child: formData.student_child,
    student_kps: formData.student_kps,
    student_hobby: formData.student_hobby,

    father_name: formData.father_name,
    father_job: formData.father_job,
    father_income: formData.father_income,
    place_birth_father: formData.place_birth_father,
    father_birth: formData.father_birth,
    mother_name: formData.mother_name,
    mother_job: formData.mother_job,
    mother_income:formData.mother_income,
    place_birth_mother: formData.place_birth_mother,
    mother_birth: formData.mother_birth,
    phoneNumber_house: formData.phoneNumber_house,

    guardian_name: formData.guardian_name,
    guardian_address: formData.guardian_address,
    guardian_phone: formData.guardian_phone,
    guardian_job: formData.guardian_job,

    school_name: formData.school_name,
    school_status:formData.school_status,
    school_address: formData.school_address,
    ijazah_number: formData.ijazah_number,
    major_choice1: formData.major_choice1,
    major_choice2: formData.major_choice2,
    nisn: formData.nisn,
    student_picture:formData.student_picture,
    studentDocument: formData.studentDocument,
   
    mathematics1: formData.mathematics1,
    mathematics2: formData.mathematics2,
    mathematics3: formData.mathematics3,
    mathematics4: formData.mathematics4,
    mathematics5: formData.mathematics5,

    science1: formData.science1,
    science2: formData.science2,
    science3: formData.science3,
    science4: formData.science4,
    science5: formData.science5,

    indonesian1: formData.indonesian1,
    indonesian2: formData.indonesian2,
    indonesian3: formData.indonesian3,
    indonesian4: formData.indonesian4,
    indonesian5: formData.indonesian5,

    english1: formData.english1,
    english2: formData.english2,
    english3: formData.english3,
    english4: formData.english4,
    english5: formData.english5,

    health_score: Number(formData.health_score) || 3,
    interview_score: Number(formData.interview_score) || 3,


  };
  console.log(formStudent);

  return formStudent;
};

// const validatePdf = (file) => {
//     const extension = /(\.pdf)$/i;
//     return extension.test(file.name)
// }
// console.log (validatePdf)

export const dataRegister = (form) => {
  const formRegister = {
    full_name: form.full_name,
    user_number: form.user_number,
    password: form.password,
    confirm_password: form.confirm_password,
    user_role:"student"
  };
  return formRegister;
};
export const validateRegister = (form, setError) => {
  let valid = true;
  // const emailRegex = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const newErrors = {
    full_name: "",
    user_number: "",
    password: "",
    confirm_password: "",
  };

  if (!form.full_name) {
    newErrors.full_name = "wajib diisi";
    valid = false;
  }

  if (!form.user_number) {
    newErrors.user_number = "wajib diisi";
    valid = false;
  } else if (form.user_number.length !== 10 || isNaN(form.user_number)) {
    newErrors.user_number = "Masukkan NISN dengan benar ";
    valid = false;
  }
  // if (!form.email) {
  //   newErrors.email = "wajib diisi";
  //   valid = false;
  // } else if (!emailRegex(form.email)) {
  //   newErrors.email = "Masukkan email yang valid";
  // }
  // Validasi password

  if (!form.password) {
    newErrors.password = "Password wajib diisi.";
    valid = false;
  } else if (form.password.length < 6) {
    newErrors.password = "Password harus memiliki minimal 6 karakter.";
    valid = false;
  }

  // Validasi konfirmasi password
  if (!form.confirm_password) {
    newErrors.confirm_password = "Konfirmasi password wajib diisi.";
    valid = false;
  } else if (form.confirm_password !== form.password) {
    newErrors.confirm_password = "Konfirmasi password tidak sesuai dengan password.";
    valid = false;
  }


  setError(newErrors);
  return valid;
};
export const loginData = (form) => {
  const formLogin = {
    user_number: form.user_number,
    password: form.password,
  };
  return formLogin;
};
export const validateLogin = (form, setError) => {
  let valid = true;
  // const emailRegex = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const newErrors = {
    user_number: "",
    password: "",
  };
  // if (!form.email) {
  //   newErrors.email = "Email wajib diisi";
  //   valid = false;
  // } else if (!emailRegex(form.email)) {
  //   newErrors.email = "Masukkan email yang valid";
  // }

  if (!form.user_number) {
    newErrors.user_number = "NISN wajib diisi";
    valid = false;
  }
  if (!form.password) {
    newErrors.password = "Password wajib diisi";
    valid = false;
  }
  setError(newErrors);
  return valid;
};

export const formatDate = (isoString) => {
  const date = new Date(isoString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};
