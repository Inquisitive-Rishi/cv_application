export default function SubmitButton({txt, buttonType}) {
  return (
    <button className="bg-green-600 p-1 flex items-center gap-1 mt-2 font-bold rounded-md text-white" type={buttonType}>
      {txt}
    </button>
  )
}
