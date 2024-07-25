import React, { useState } from 'react';
import { Input } from '../Ui/Form/Input';
import { ErrMsg } from '../Error/ErrMsg';

function StudentFileData({ error, setFormData, formData }) {
	// function handleFilePdf(e) {
	// 	// oper data ke form data yang ada pada Form.jsx
	// 	const { name, value, files } = e.target;
	// 	setFormData((prevFormData) => ({
	// 		...prevFormData,
	// 		[name]: value,
	// 		studentDocument: files ? files[0] : prevFormData.studentDocument, // Menambahkan file jika ada
	// 	}));
	// }

  function handleFilePdf(e) {
	const { name, files } = e.target;
	setFormData((prevFormData) => ({
		...prevFormData,
		[name]: files[0], // Memasukkan file yang dipilih ke dalam formData
	}));
}

	return (
		<div>
			<div className='mb-3'>
				<label
					htmlFor='studentDocument'
					className='form-label'
				>
					Default file input example
				</label>
				<Input
					type={'file'}
					id='studentDocument'
					name='studentDocument'
					className={'form-control'}
					onChange={handleFilePdf}
					accept='.pdf'
					multiple={false}
				/>
				<ErrMsg msg={error.studentDocument} />
			</div>
		</div>
	);
}

export default StudentFileData;