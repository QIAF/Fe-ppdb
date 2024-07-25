export const validateForm = (formData, setError) => {
    let valid = true;

    const newErrors = {
        student_name: "",
        student_gender: "",//
        place_birth: "",
        date_birth: "",
        student_address: "",
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
        place_birth_father: "",
        father_birth: "",
        mother_name: "",
        mother_job: "",
        place_birth_mother: "",
        mother_birth: "",
        phoneNumber_house: "",

        guardian_name: "",
        guardian_address: "",
        guardian_phone: "",
        guardian_job: "",

        school_name: "",
        school_address: "",
        ijazah_number: "",
        nisn: "",
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

    };

    if (!formData.student_name){
        newErrors.student_name = 'wajib diisi'
        valid=false;
    }
    if (!formData.student_gender){
        newErrors.student_gender = 'wajib diisi'
        valid=false;
    }
    if (!formData.place_birth){
        newErrors.place_birth = 'wajib diisi'
        valid=false;
    }
    if (!formData.date_birth){
        newErrors.date_birth = 'wajib diisi'
        valid=false;
    }
    if (!formData.student_address){
        newErrors.student_address = 'wajib diisi'
        valid=false;
    }
    if (!formData.student_distance){
        newErrors.student_distance = 'wajib diisi'
        valid=false;
    }
    if (!formData.student_religion){
        newErrors.student_religion = 'wajib diisi'
        valid=false;
    }
    if (!formData.student_blood_type){
        newErrors.student_blood_type = 'wajib diisi'
        valid=false;
    }
    if (!formData.student_weight){
        newErrors.student_weight = 'wajib diisi'
        valid=false;
    }
    if (!formData.student_height){
        newErrors.student_height = 'wajib diisi'
        valid=false;
    }
    if (!formData.student_child){
        newErrors.student_child = 'wajib diisi'
        valid=false;
    }
    if (!formData.student_kps){
        newErrors.student_kps = 'wajib diisi'
        valid=false;
    }
    if (!formData.student_hobby){
        newErrors.student_hobby = 'wajib diisi'
        valid=false;
    }


    if (!formData.father_name){
        newErrors.father_name = 'wajib diisi'
        valid=false;
    }
    if (!formData.father_job){
        newErrors.father_job = 'wajib diisi'
        valid=false;
    }
    if (!formData.place_birth_father){
        newErrors.place_birth_father = 'wajib diisi'
        valid=false;
    }
    if (!formData.mother_name){
        newErrors.mother_name = 'wajib diisi'
        valid=false;
    }
    if (!formData.mother_job){
        newErrors.mother_job = 'wajib diisi'
        valid=false;
    }
    if (!formData.place_birth_mother){
        newErrors.place_birth_mother = 'wajib diisi'
        valid=false;
    }
    if (!formData.mother_birth){
        newErrors.mother_birth = 'wajib diisi'
        valid=false;
    }
    if (!formData.phoneNumber_house){
        newErrors.phoneNumber_house = 'wajib diisi'
        valid=false;
    }
    if (!formData.school_name){
        newErrors.school_name = 'wajib diisi'
        valid=false;
    }
    if (!formData.school_address){
        newErrors.school_address = 'wajib diisi'
        valid=false;
    }
    if (!formData.ijazah_number){
        newErrors.ijazah_number = 'wajib diisi'
        valid=false;
    }
    if (!formData.nisn){
        newErrors.nisn = 'wajib diisi'
        valid=false;
    }

    if (!formData.mathematics1){
        newErrors.mathematics1 = 'wajib diisi'
        valid=false;
    }
    if (!formData.mathematics2){
        newErrors.mathematics2 = 'wajib diisi'
        valid=false;
    }
    if (!formData.mathematics3){
        newErrors.mathematics3 = 'wajib diisi'
        valid=false;
    }
    if (!formData.mathematics4){
        newErrors.mathematics4 = 'wajib diisi'
        valid=false;
    }
    if (!formData.mathematics5){
        newErrors.mathematics5= 'wajib diisi'
        valid=false;
    }
    if (!formData.science1){
        newErrors.science1='wajib diisi'
        valid=false;
    }
    if (!formData.science2){
        newErrors.science2= 'wajib diisi'
        valid=false;
    }
    if (!formData.science3){
        newErrors.science3 = 'wajib diisi'
        valid=false;
    }
    if (!formData.science3){
        newErrors.science3 = 'wajib diisi'
        valid=false;
    }
    if (!formData.science4){
        newErrors.science4 = 'wajib diisi'
        valid=false;
    }
    if (!formData.science5){
        newErrors.science5 = 'wajib diisi'
        valid=false;
    }
    if (!formData.student_kps){
        newErrors.student_kps = 'wajib diisi'
        valid=false;
    }
    if (!formData.indonesian1){
        newErrors.indonesian2 = 'wajib diisi'
        valid=false;
    }
    if (!formData.indonesian2){
        newErrors.indonesian2 = 'wajib diisi'
        valid=false;
    }
    if (!formData.indonesian3){
        newErrors.indonesian3= 'wajib diisi'
        valid=false;
    }
    if (!formData.indonesian4){
        newErrors.indonesian4='wajib diisi'
        valid=false;
    }
    if (!formData.indonesian5){
        newErrors.indonesian5= 'wajib diisi'
        valid=false;
    }
    if (!formData.english1){
        newErrors.english1 = 'wajib diisi'
        valid=false;
    }
    if (!formData.english2){
        newErrors.english2= 'wajib diisi'
        valid=false;
    }
    if (!formData.english3){
        newErrors.english3 = 'wajib diisi'
        valid=false;
    }
    if (!formData.english4){
        newErrors.english4 = 'wajib diisi'
        valid=false;
    }
    if (!formData.english5){
        newErrors.english5 = 'wajib diisi'
        valid=false;
    }
    if (!formData.student_kps){
        newErrors.student_kps = 'wajib diisi'
        valid=false;
    }

    if (!formData.studentDocument){
        newErrors.studentDocument = 'wajib diisi'
        valid=false;
    // } else if(!validatePdf(formData.studentDocument)){
    //     newErrors.studentDocument = 'hanya file dengan ekstensi pdf'
    //     valid=false;
    }

    setError(newErrors);
    return valid;

}

// const validatePdf = (file) => {
//     const extension = /(\.pdf)$/i;
//     return extension.test(file.name)
// }
// console.log (validatePdf)

export const validateRegister = (formRegistration , setError) => {
    let valid = true;

      if (!formRegistration.full_name){
        newErrors.full_name = 'wajib diisi'
        valid=false;
    }
    if (!formRegistration.age){
        newErrors.age = 'wajib diisi'
        valid=false;
    }
    setError(newErrors);
    return valid;
}

export const validateLogin = (form , setError) => {
    let valid = true;

    const newErrors = {
        email: '',
        password: '',
    }

    if (!form.email){
        newErrors.email = 'wajib diisi'
        valid=false;
    }
    if (!form.password){
        newErrors.password = 'wajib diisi'
        valid=false;
    }
    setError(newErrors);
    return valid;
};
export const dataStudent = (formData) => {
  const formStudent = {
    student_name: formData.student_name,
    student_gender: formData.student_gender,
    place_birth: formData.place_birth,
    date_birth: formData.date_birth,
    student_address: formData.student_address,
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
    place_birth_father: formData.place_birth_father,
    father_birth: formData.father_birth,
    mother_name: formData.mother_name,
    mother_job: formData.mother_job,
    place_birth_mother: formData.place_birth_mother,
    mother_birth: formData.mother_birth,
    phoneNumber_house: formData.phoneNumber_house,

    guardian_name: formData.guardian_name,
    guardian_address: formData.guardian_address,
    guardian_phone: formData.guardian_phone,
    guardian_job: formData.guardian_job,

    school_name: formData.school_name,
    school_address: formData.school_address,
    ijazah_number: formData.ijazah_number,
    nisn: formData.nisn,
    studentDocument: formData.studentDocument,
    // studentDocument: formData.studentDocument instanceof File ? formData.studentDocument : null,

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
  };
  console.log(formStudent)


  return formStudent;
};

 export const dataRegister = (formRegistration) => {
    const formRegister = {
        full_name: formRegistration.full_name,
        age: formRegistration.age,
    }
    return formRegister;
}

export const loginData = (form) => {
    const formLogin = {
        email: form.email,
        password: form.password
    }
    return formLogin;
}