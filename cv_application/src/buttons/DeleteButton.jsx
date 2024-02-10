import trashImg from '../../assets/trash-can.png'

export default function DeleteButton({txt, alt}) {
  return (
    <button className="bg-red-500 p-1 flex items-center gap-1 mt-2 font-bold rounded-md text-white" type="reset">
      <img src={trashImg} alt={alt} />
      {txt}
    </button>
  )
}
