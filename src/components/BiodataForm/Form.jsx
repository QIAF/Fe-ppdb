import React, { useState } from 'react';
import StudentData from './StudentData';
import StudentParentData from './StudentParentData';
import StudentGuardianData from './StudentGuardianData';
import StudentSchool from './StudentSchool';
import StudentScoreReport from './StudentScoreReport';
import NavbarMajor from '../Navbar/NavbarMajor';
import StudentFileData from './StudentFileData';
import { dataStudent, validateForm, validateLogin } from '../../Utils/validation';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import client from '../../Utils/auth';

function Form() {
	const [error, setError] = useState({});
	const [page, setPage] = useState(0);
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		student_name: '',
		student_gender: '',
		place_birth: '',
		date_birth: '',
		student_address: '',
		student_distance: '',
		student_religion: '',
		student_blood_type: '',
		student_weight: '',
		student_height: '',
		student_child: '',
		student_kps: '',
		student_hobby: '',

		father_name: '',
		father_job: '',
		place_birth_father: '',
		father_birth: '',
		mother_name: '',
		mother_job: '',
		place_birth_mother: '',
		mother_birth: '',
		phoneNumber_house: '',

		guardian_name: '',
		guardian_address: '',
		guardian_phone: '',
		guardian_job: '',

		school_name: '',
		school_address: '',
		ijazah_number: '',
		nisn: '',

		mathematics1: '',
		mathematics2: '',
		mathematics3: '',
		mathematics4: '',
		mathematics5: '',

		science1: '',
		science2: '',
		science3: '',
		science4: '',
		science5: '',

		indonesian1: '',
		indonesian2: '',
		indonesian3: '',
		indonesian4: '',
		indonesian5: '',

		english1: '',
		english2: '',
		english3: '',
		english4: '',
		english5: '',

		studentDocument: '',
	});

	// function handleFilePdf (e) {
	//   setFormData(e.target.files[0])
	//     console.log (e.target.files)
	// }

	console.log('masuk ga', formData);

	const handleInput = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
		validateForm(formData, setError);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((preForm) => ({
			...preForm,
			[name]: value,
		}));
	};

	const handlePostForm = async (formData) => {
    const dataToSend = dataStudent(formData);
    const formDataToSend = new FormData();
    for (let key in dataToSend) {
      formDataToSend.append(key, dataToSend[key]); // Memasukkan setiap properti dari dataToSend ke formDataToSend
    }

    console.log("ada ga datanya? ", formData )

		if (validateForm(formData, setError)) {
      const token = localStorage.getItem('token');
      console.log('Token for request:', token); // Ambil token dari localStorage
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}` // Sertakan token dalam header Authorization
        }
      };
		try {
			const res = await axios.post('http://localhost:3000/api/v1/studentData/create', formDataToSend, config);

			console.log('res data', res);

			if (res.status === 201) {
				navigate('/FormDetail');
				fetchData();
				toast.success('Berhasil menambahkan data', { delay: 800 });
			} else {
				toast.error('Terjadi kesalahan saat menambahkan data', { delay: 800 });
			}
		} catch (error) {
			toast.error('Gagal menambahkan data', { delay: 800 });
		}
		} else {
		  alert("Data belum lengkap");
		}
	};

	const FormTitles = ['StudentData', 'StudentParentData', 'StudentGuardianData', 'StudentSchool', 'StudentScoreReport', 'StudentFileData'];

	const PageDisplay = () => {
		if (page === 0) {
			return (
				<StudentData
					formData={formData}
					setFormData={setFormData}
					handleInput={handleInput}
					error={error}
					handleChange={handleChange}
				/>
			);
		} else if (page === 1) {
			return (
				<StudentParentData
					formData={formData}
					setFormData={setFormData}
					handleInput={handleInput}
					error={error}
				/>
			);
		} else if (page === 2) {
			return (
				<StudentGuardianData
					formData={formData}
					setFormData={setFormData}
					handleInput={handleInput}
				/>
			);
		} else if (page === 3) {
			return (
				<StudentSchool
					formData={formData}
					setFormData={setFormData}
					handleInput={handleInput}
					error={error}
				/>
			);
		} else if (page === 4) {
			return (
				<StudentScoreReport
					formData={formData}
					setFormData={setFormData}
					handleInput={handleInput}
					error={error}
				/>
			);
		} else {
			return (
				<StudentFileData
					formData={formData}
					setFormData={setFormData}
					error={error}
				/>
			);
		}
	};

	return (
		<>
			<NavbarMajor />
			<div
				className='biodata container'
				style={{
					height: 'fit-content',
					minHeight: '13rem',
				}}
			>
				<div className='box-content '>
					<div className='box '>
						<div className='container'>
							<div className='header'></div>
							<div className='body'>{PageDisplay()}</div>
							<div className='footer d-grid gap-2 d-md-flex justify-content-md-end'>
								<button
									className='btn btn-primary me-md-2'
									type='button'
									disabled={page == 0}
									onClick={() => {
										setPage((currPage) => currPage - 1);
									}}
								>
									Sebelumnya
								</button>
								<button
									className='btn btn-primary'
									type='button'
									onClick={() => {
										if (page == FormTitles.length - 1) {
											handlePostForm(formData);
                      console.log('ada??', formData)
										} else {
											setPage((currPage) => currPage + 1);
										}
									}}
								>
									{page === FormTitles.length - 1 ? 'Kirim' : 'Selanjutnya'}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Form;