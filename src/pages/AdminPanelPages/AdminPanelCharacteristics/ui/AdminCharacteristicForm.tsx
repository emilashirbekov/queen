import { useCreateCharacteristicMutation } from '@/features/Characteristics/ui/model/services/characteristicsAPI';
import { CharacteristicsTypes } from '@/features/Characteristics/ui/model/types/characteristics.types';
import Button from '@/shared/ui/Buttons/Button';
import InputField from '@/shared/ui/Inputs/InputField';
import SuccessErrorMessage from '@/shared/ui/SuccessErrorMessage';
import { ChangeEvent, FormEvent, useState } from 'react';

const AdminCharacteristicForm = () => {
  const [createCharacteristic, { isSuccess, error }] =
    useCreateCharacteristicMutation();
  const [characteristic, setCharacteristic] = useState<
    Omit<CharacteristicsTypes, "id">
  >({
    title: "",
    value: "",
  });
    const [validation, setValidation] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCharacteristic({ ...characteristic, [name]: value });
  };

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
	e.preventDefault();
	const pattern = /^[a-zA-Zа-яА-Я0-9]+$/;
	const trimmedTitle = characteristic.title.trim();
	const trimmedValue = characteristic.value.trim();

  if (pattern.test(trimmedTitle) && pattern.test(trimmedValue)) {
    //@ts-ignore
		createCharacteristic(characteristic);
		setCharacteristic({ title: '', value: '' });
	} else {
		setValidation('Характеристика не может содержать посторонние символы!');
	}
};

 setTimeout(() => {
		setValidation('');
 }, 4000);
  return (
		<div className='mb-5'>
			<form
				onSubmit={handleSubmit}
				className='flex items-center gap-5 flex-wrap'
			>
				<InputField
					required
					placeholder='Новое название'
					onChange={handleInputChange}
					name='title'
					value={characteristic.title}
					type='text'
					typeField=''
				/>
				<InputField
					required
					placeholder='Новое значение'
					onChange={handleInputChange}
					name='value'
					value={characteristic.value}
					type='text'
					typeField=''
				/>
				<Button type='submit' typeButton='' style='admin-button text-base'>
					Добавить
				</Button>
			</form>
			<span className='text-red text-base font-bold'>{validation}</span>

			<SuccessErrorMessage
				text='Характеристика удачно добавлена !'
				isSuccess={isSuccess}
				error={error}
			/>
		</div>
	);
};

export default AdminCharacteristicForm;
