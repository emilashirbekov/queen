import { FC, memo, useEffect, useState } from "react";

interface SuccessErrorMessageProps {
  isSuccess: boolean;
  error:any;
  text: string;
}

const SuccessErrorMessage: FC<SuccessErrorMessageProps> = memo((props) => {
  const { isSuccess, error, text } = props;
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (isSuccess || error) {
      setShowMessage(true);

      const timeout = setTimeout(() => {
        setShowMessage(false);
      }, 4000);

      return () => clearTimeout(timeout);
    }
  }, [isSuccess, error]);

  return (
		<>
			{showMessage &&
				(isSuccess ? (
					<p className='text-lg text-lightGreen font-semibold'>{text} </p>
				) : (
					error && (
						<p className='text-lg text-red font-semibold'>
							{/* Что то пошло не так ! */}
							{error.data.error || error.data.non_field_errors}
						</p>
					)
				))}
		</>
	);
});

export default SuccessErrorMessage;
