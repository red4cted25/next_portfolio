"use client";

const Project = ({title, img, desc, date}) => {
    return (
        <>
            {/* Project Square */}
            {/* onClick function opens modal from DaisyUI lib */}
            <div className="w-48 h-48 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col justify-between" style={{backgroundImage: `url(${img})`, backgroundSize: 'cover'}} onClick={()=>document.getElementById('my_modal_3').showModal()}>
                <div className="bg-brand-secondary/70 text-center text-brand-background py-2">{title}</div>
                <div className="bg-brand-secondary/70 text-center text-brand-background py-1">{date}</div>
            </div>
            {/* Modal */}
            <dialog id="my_modal_3" className="modal text-brand-background">
                <div className="modal-box bg-brand-secondary-light">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="text-sm">{date}</p>
                    <p className="py-4">{desc}</p>
                </div>
            </dialog>
        </>
    )
}

export default Project