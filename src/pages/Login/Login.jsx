import { Input } from '../../components/Ui/Form/Input';
import { useEffect, useState } from 'react';
import ImgGoogle from '../../../src/assets/images/img-icon-google.png';
import { ErrMsg } from '../../components/Error/ErrMsg';
import { loginData, validateLogin } from '../../Utils/validation';
import { SignUp } from './SignUp';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';
import axios from 'axios';
import Cookies from 'js-cookie';

export const Login = ({ title, props }) => {
	const [modalRegister, setModalRegister] = useState(false);
	const [error, setError] = useState({});
	const [modalLoginOpen, setModalLoginOpen] = useState(true);
	const navigate = useNavigate();

	const handleRegisterModal = () => {
		setModalLoginOpen(false);
		setModalRegister(true);
	};

	const handleLoginModal = () => {
		setModalRegister(false);
		setModalLoginOpen(true);
	};

	const [form, setForm] = useState({
		email: '',
		password: '',
	});

	const handleInput = (e) => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value,
		});
	};

	const handlePostForm = async (data) => {
		const formLogin = loginData(data);

		if (validateLogin(form, setError)) {
			try {
				const res = await axios.post('http://localhost:3000/api/v1/auth/login', formLogin);
				console.log('respone :', res.status);
				if (res.status === 200) {
					const token = res.data._token;
					Cookies.set('token', token);
					navigate('/formData'); //buat ke hal form
					toast.success('Berhasil melakukan login', { delay: 800 });
				} else {
					toast.error('Terjadi kesalahan saat login', { delay: 800 });
				}
			} catch (error) {
				toast.error('Gagal Login', { delay: 800 });
			}
		}
	};

	useEffect(() => {
		if (props && props.nextPage) {
			const timerId = setTimeout(() => navigate(props.nextPage), 300);
			return () => clearTimeout(timerId);
		}
	}, [navigate, props]);

	return (
		<>
			{modalLoginOpen && (
				<div
					className='modal fade'
					id='exampleModal'
					tabIndex='-1'
					aria-labelledby='exampleModalLabel'
					aria-hidden='true'
				>
					<div className='modal-dialog'>
						<div className='modal-content'>
							<div className='modal-header'>
								<h1
									className='modal-title fs-5'
									id='exampleModalLabel'
									style={{ color: '#816503' }}
								>
									{title}
								</h1>
								<button
									type='button'
									className='btn-close'
									data-bs-dismiss='modal'
									aria-label='Close'
									onClick={() => setModalLoginOpen(false)}
								></button>
							</div>
							<div className='modal-body'>
								<div className='mb-3'>
									<Input
										type={'email'}
										className={'form-control'}
										placeholder={'Masukkan email anda'}
										id='email'
										name='email'
										value={form.email}
										onChange={handleInput}
									/>
									<ErrMsg msg={error.email} />
								</div>
								<div className='mb-3'>
									<Input
										type='password'
										className={'form-control'}
										placeholder={'Masukkan password anda'}
										id='password'
										name='password'
										value={form.password}
										onChange={handleInput}
									/>
								</div>
								<ErrMsg msg={error.password} />
							</div>
							<div className='modal-footer'>
								<div className='d-grid gap-2 col-6 mx-auto'>
									<button
										className='btn btn-primary'
										type='submit'
										onClick={() => handlePostForm(form)}
									>
										Login
									</button>
									<button
										className='btn btn-primary'
										type='button'
										onClick={handleRegisterModal}
									>
										Register
									</button>
								</div>
							</div>
							<p
								className='title-or text-center'
								style={{ color: '#000000' }}
							>
								atau
							</p>
							<div className='d-flex justify-content-center mx-auto mb-3'>
								<button
									type='button'
									className='btn btn-outline-dark btn-sm '
								>
									<img
										className='img-google'
										src={ImgGoogle}
										alt=''
									/>{' '}
									&nbsp; Masuk dengan google
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
			{modalRegister && (
				<SignUp
					title={'Silahkan Mendaftar !'}
					onClose={handleLoginModal}
				/>
			)}
		</>
	);
};
