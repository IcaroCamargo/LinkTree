import { useState } from "react"
import { Input } from "./Input"

export const EditPage = () => {
    const [name, setName] = useState("Zezinho");
    return (
        <div>
            <div className="container mx-auto flex">
                <main className="w-8/12 bg-cyan-900 h-96 p-4 justify-around">

                    <form className="space-y-6">
                        <Input name={"Nome:"} id={"name"} placeholder=" Ex: Icaro" value={name} onChange={(event) => {setName(event.target.value)}}/>
                        <Input name={"GitHub:"} id={"github"} placeholder=" Ex: IcaroCamargo" />
                        <div className="grid grid-cols-4 gap-4">
                            <Input name={"Linkedin:"} id={"linkedin"} placeholder=" Ex: IcaroCamargo" />
                            <Input name={"Instagram:"} id={"instagram"} placeholder=" Ex: IcaroCamargo" />
                            <Input name={"TikTok:"} id={"tiktok"} placeholder=" Ex: IcaroCamargo" />
                            <Input name={"Facebook:"} id={"facebook"} placeholder=" Ex: IcaroCamargo" />
                        </div>
                    </form>

                </main>

                <aside className="w-4/12 bg-cyan-600 h-96">
                    Seu Nome: {name}
                </aside>
            </div>
        </div>
    )
}