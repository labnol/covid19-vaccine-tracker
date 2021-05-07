import { useEffect, useState } from 'react';
import Error from './Error';
import Form from './Form';
import Header from './Header';
import Saved from './Saved';
import { getMaxDate, getMinDate } from './utils';

export default function App() {
  const [formData, setFormData] = useState({
    pincode: '',
    email: '',
    frequency: 'day',
    age: 'any',
    vaccine: 'any',
    start_date: getMinDate(),
    end_date: getMaxDate(),
  });

  const [sending, setSending] = useState(false);

  const [error, setError] = useState(false);

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (window.google) {
      window.google.script.run
        .withSuccessHandler((e) => {
          if (e !== null) {
            setFormData(e);
          }
        })
        .withFailureHandler(() => {
          setError(true);
        })
        .getData();
    }
  }, []);

  const onFormSubmit = (event) => {
    event.preventDefault();
    setSending(true);
    if (window.google) {
      window.google.script.run
        .withSuccessHandler(function (e) {
          setSaved(true);
        })
        .withFailureHandler(() => {
          setError(true);
        })
        .init(formData);
    } else {
      console.dir(formData);
    }
  };

  const onChange = ({ target: { name, value, type, checked } }) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  if (error) return <Error />;

  return (
    <div className="min-h-screen flex flex-col justify-center px-2">
      <Header />
      {saved ? (
        <Saved daily={formData.frequency === 'day'} />
      ) : (
        <Form
          onSubmit={onFormSubmit}
          onChange={onChange}
          formData={formData}
          sending={sending}
        />
      )}
    </div>
  );
}
