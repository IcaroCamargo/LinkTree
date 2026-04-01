export function LoginPage() {
  <link rel="stylesheet" />


  return (
    <div className=" w-full h-screen bg-[#0b1020] flex items-center justify-center">

      <div className="z-10 w-full max-w-md bg-[#111a2e] border p-8 rounded-xl shadow border-[#00e5ff]/20">


        <div className="w-full flex justify-center mb-6">
          <img
            src="/img/logo.png"
            alt="TechLinks Logo"
            className="w-20 h-20 object-cover rounded-lg  border-[#00e5ff]/20 border"
          />
        </div>
        <h1 className="flex justify-center text-4xl font-bold tracking-tighter text-white uppercase mb-1 italic">
          Tech<span className="text-primary text-[#00e5ff]">Links</span>

        </h1>
        <p className="flex justify-center text-slate-400 text-sm font-medium mb-3">Sua central de links de projetos</p>

        <form className="space-y-5">

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">email</label>

            <div className="relative">
              <input className="w-full bg-[#0b1020] border-[#173236] text-[#00e5ff] border rounded-xl py-3.5 pl-12 pr-4 font-mono text-sm placeholder:text-slate-400" placeholder="dev@etec.sp.gov.br" type="email" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">senha</label>
            <a className="text-xs font-bold tracking-widest text-[#00e5ff] uppercase ml-40 hover:underline hover:text-[#00e5ff]">esqueci minha senha</a>

            <div className="relative">
              <input className="w-full bg-[#0b1020] border-[#173236] text-[#00e5ff] border rounded-xl py-3.5 pl-12 pr-4 font-mono text-sm placeholder:text-slate-400 mb-8" placeholder="°°°°°°°°" type="password" />
            </div>
          </div>


        </form>

        <div className="flex justify-center">
          <button className="w-full bg-[#00e5ff] hover:bg-[#00e5ff]/90 text-[#0b1020] font-bold py-3 rounded-lg hover:shadow-[0_0_20px_rgba(255,0,0,0.25)]  hover:shadow-[#00E5FF99] transition-shadow mb-3"> Realizar login</button>
        </div>

        <div>
          <button className="w-full font-bold bg-[#0b1020] border-[#173236] text-slate-400 border rounded-lg hover:opacity-75 transition-opacity py-3">Realizar Cadastro</button>
        </div>
      </div>
    </div>
  );

}


