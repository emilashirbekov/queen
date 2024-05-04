import { FC, memo, useEffect, useState } from "react";

interface SuccessErrorMessageProps {
  isSuccess: boolean;
  error: any;
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
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [isSuccess, error]);

  return (
    <>
      {showMessage &&
        (isSuccess ? (
          <p className="text-lg text-lightGreen font-semibold">{text} </p>
        ) : (
          error && (
            <p className="text-lg text-red font-semibold">
              {error.data.non_field_errors ||
                error.data.error ||
                "Что то пошло не так !"}
            </p>
          )
        ))}
    </>
  );
});

export default SuccessErrorMessage;
