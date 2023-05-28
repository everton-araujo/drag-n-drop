import { UserCircleIcon } from '@heroicons/react/24/solid'

export default function Suggestion() {
  return (
    <div className='flex items-center justify-center px-5 py-2 md:py-5'>
      <p className='flex items-center text-sm p-5 font-light pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055D1]'>
        <UserCircleIcon className='inline-block h-10 w-10 text-[#0055D1] mr-1' />

        Suggestion
      </p>
    </div>
  )
}
