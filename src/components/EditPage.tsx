import { useState } from "react"
import { Input } from "./Input"

interface Link {
    name: string,
    url: string
}

export const EditPage = () => {
    const [name, setName] = useState("Zezinho");
    const [links, setLinks] = useState<Link[]>([]);

    const handleAddLink = () => { setLinks([...links, { name: "", url: "" }]) };

    const handleLinkChange = (index: number, field: string, value: string) => {
        const updatedLinks = [...links];

        updatedLinks[index] = {
            ...updatedLinks[index],
            [field]: value,
        };

        setLinks(updatedLinks);

    }

    return (
        <div>
            <div className="container mx-auto flex">
                <main className="w-8/12 bg-cyan-900 h-96 p-4 justify-around">

                    <form className="space-y-6" onSubmit={(event) => { event.preventDefault(); }}>
                        <Input name={"Nome:"} id={"name"} placeholder=" Ex: Icaro" value={name} onChange={(event) => { setName(event.target.value) }} />
                        <Input name={"GitHub:"} id={"github"} placeholder=" Ex: IcaroCamargo" />
                        <div className="grid grid-cols-4 gap-4">
                            <Input name={"Linkedin:"} id={"linkedin"} placeholder=" Ex: IcaroCamargo" />
                            <Input name={"Instagram:"} id={"instagram"} placeholder=" Ex: IcaroCamargo" />
                            <Input name={"TikTok:"} id={"tiktok"} placeholder=" Ex: IcaroCamargo" />
                            <Input name={"Facebook:"} id={"facebook"} placeholder=" Ex: IcaroCamargo" />
                        </div>
                        <div className="space-y-4">
                            {
                                links.map((link, index) => {
                                    return (
                                        <div className="flex gap-4">
                                            <Input
                                                name={"Link" + index + 1}
                                                id={"Link-" + index}
                                                value={link.name}
                                                placeholder="Ex: Eu deixei???????????" 
                                                onChange={(event) => {handleLinkChange(index, "name", event.target.value);}}/>

                                            <Input
                                                name={"URL do Link"}
                                                id={"link-url-" + index}
                                                value={link.url}
                                                placeholder="Ex: https://meusite.com" 
                                                onChange={(event) => {handleLinkChange(index, "url", event.target.value);}}/>
                                        </div>


                                    )
                                })
                            }
                            <button onClick={handleAddLink} className="bg-cyan-600 w-50 rounded-xl uppercase font-bold italic cursor-pointer px-4 py-2 hover:opacity-90 transition-opacity">Adicionar Link</button>
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