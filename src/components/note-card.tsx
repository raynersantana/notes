export function Notecard() {
    return (
        <button className='rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden outline-none relative hover:ring-2 hover:ring-slate-600 focus:ring-2 focus:ring-lime-400'>
          <span className='text-sm font-medium text-slate-300'>
            há 4 dias
          </span>
          <p className='text-sm leading-6 text-slate-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolorem cupiditate eius iste, minima aliquam dolore fugit quasi reiciendis ut veniam inventore repudiandae quod eligendi temporibus! Magnam earum qui amet.
          </p>
          <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none'/>
        </button>
    )
}