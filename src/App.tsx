import { useForm } from 'react-hook-form';


type TFormData = {
  name: string,
  age: number,
}

export function App() {
  const { register, handleSubmit } = useForm<TFormData>();



  const handleSave = (data: TFormData) => {
    console.log(data);
  }


  return (
    <form onSubmit={handleSubmit(handleSave, (errors) => console.log(errors))}>
      <fieldset>
        <legend>Fill the form</legend>

        <label>
          <span>Name</span>
          <br />

          <input
            placeholder='Name'
            {...register('name')}
          />

          <br />
          <span>Type the name here</span>
        </label>

        <br />
        <br />

        <label>
          <span>Age</span>
          <br />

          <input
            type='number'
            placeholder='Age'
            {...register('age')}
          />

          <br />
          <span>Type the age here</span>
        </label>

        <br />
        <br />
        <br />

        <button>
          Submit
        </button>
      </fieldset>
    </form>
  )
}
