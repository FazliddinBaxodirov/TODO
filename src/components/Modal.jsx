
export default function Modal({children , isOpen,setIsOpen}) {
    return (
    <div id="modal-wrapper" onClick={(e) => e.target.id == "modal-wrapper" ? setIsOpen(false) : setIsOpen(true) } className={`${isOpen ? "scale-100" : "scale-0"} fixed top-0 left-0 w-full h-full bg-violet-500 backdrop-blur-md bg-opacity-50 flex items-center justify-center duration-300`}>
        <div className="bg-white p-6 rounded-md shadow-lg w-[40%]">
            {children}
        </div>
    </div>
  )
}