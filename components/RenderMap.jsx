

export const RenderMap = () => {
  return (
    <div className="max-w-6xl mx-auto ">

      <div className="w-[100%] min-h-[600px] bg-red-800 mx-auto mt-4 rounded-md">
        <p className="text-white text-xl text-center py-3">Contact Us:</p>
        <ul className="flex flex-col space-y-1 text-center gap-y-2">
          <li className="text-white text-xs mt-1">Dr Prateek Mittal, Mobile:7838682667, Email:prateekmittal.set@mriu.edu.in</li>
        </ul>
        <p className="text-white text-xl text-center py-3">Address</p>
        <ul className="flex flex-col space-y-1 text-center gap-y-2">
          <li className="text-white text-xs mt-1">Sector-43, Manav Rachna International Institute Of Research And Studies</li>
          <li className="text-white text-xs mt-1">Aravali Hills, Faridabad, 121003</li>
        </ul>
        <div className="w-[75%] mx-auto mt-5 pb-5">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3232.3176483701995!2d77.33010480379471!3d28.39936019533079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc55f3e91793%3A0x60260d2a7c64e056!2sManav%20Rachna%20International%20School!5e0!3m2!1sen!2sin!4v1715083707470!5m2!1sen!2sin" width="600" height="450" style={{border:'0',width:'100%'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  )
}