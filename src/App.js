import { useEffect, useState } from 'react';
import Error from './Error';
import Footer from './Footer';
import Form from './Form';
import Header from './Header';
import Saved from './Saved';

export default function App() {
  const [formData, setFormData] = useState({
    pincode: '',
    email: '',
    frequency: 'day',
    young: true,
    old: true,
  });

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
    window.google.script.run
      .withSuccessHandler(function (e) {
        setSaved(true);
      })
      .withFailureHandler(() => {
        setError(true);
      })
      .init(formData);
  };

  const onChange = ({ target: { name, value, type, checked } }) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  if (error) return <Error />;

  if (saved) return <Saved daily={formData.frequency === 'day'} />;

  return (
    <div className="min-h-screen flex flex-col justify-center px-2">
      <Header />
      <div className="mt-8 mx-auto w-full px-8">
        <Form onSubmit={onFormSubmit} onChange={onChange} formData={formData} />
        <Footer />
      </div>
    </div>
  );
}
