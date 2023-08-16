
type Props = {}

const Form = (props: Props) => {
  return (
    <div className="flex items-center justify-center gap-10 w-full pb-8">
      <form
        action="https://formspree.io/f/xbjvgpog" 
        method="POST"
        className={`flex flex-col gap-4 md:w-[40%] w-full border-2 border-solid 
          border-primary-color rounded-md p-3 shadow-about`}
      >
        <label 
          htmlFor="name"
          className='text-primary-color font-bold'
        >
          Name:
        </label>
        <input 
          type='text' 
          id="name" 
          name="name" 
          required 
          className={`border-2 border-solid border-primary-color focus:border-secondary-color 
            dark:bg-slate-800 dark:text-white focus:outline-none rounded-md p-1 text-black`}
        />

        <label 
          htmlFor="email"
          className='text-primary-color font-bold'
        >
          Email:
        </label>
        <input 
          type='email' 
          id="email" 
          name="email" 
          required
          className={`border-2 border-solid border-primary-color focus:border-secondary-color 
          dark:bg-slate-800 dark:text-white focus:outline-none rounded-md p-1 text-black`}
        />

        <label 
          htmlFor="message"
          className='text-primary-color font-bold'
        >
          Message:
        </label>

        <textarea 
          id="message" 
          name="message" 
          required
          className={`border-2 border-solid border-primary-color focus:border-secondary-color 
          dark:bg-slate-800 dark:text-white focus:outline-none rounded-md p-1 text-black`}
        >
        </textarea>

        <button 
          type='submit'
          className='bg-primary-color text-white rounded-md p-1 hover:bg-secondary-color hover:text-primary-color transition duration-300 ease-in-out'
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form;