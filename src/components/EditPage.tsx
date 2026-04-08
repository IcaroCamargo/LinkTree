import { useState } from "react"
import { Input } from "./Input"
import { SocialMediaLink } from "./SocialMediaLink";
import { SiFacebook, SiGithub, SiInstagram, SiTiktok } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";
import { GrLinkedin } from "react-icons/gr";

interface Link {
    name: string,
    url: string
}

export const EditPage = () => {
    const [name, setName] = useState("");
    const [links, setLinks] = useState<Link[]>([]);
    const [github, setGithub] =useState("");
    const [linkedin, setLinkedin] =useState("");
    const [instagram, setInstagram] =useState("");
    const [tiktok, setTiktok] =useState("");
    const [facebook, setFacebook] =useState("");

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
                <main className="w-8/12  h-96 p-4 justify-around">

                    <form className="space-y-6" onSubmit={(event) => { event.preventDefault(); }}>
                        <Input name={"Nome:"} id={"name"} placeholder=" Ex: Icaro" value={name} onChange={(event) => { setName(event.target.value) }} />
                        <Input name={"GitHub:"} id={"github"} placeholder=" Ex: IcaroCamargo" value={github} onChange={(event) => {setGithub(event.target.value)}} />
                        <div className="grid grid-cols-4 gap-4">
                            <Input name={"Linkedin:"} id={"linkedin"} placeholder=" Ex: IcaroCamargo" value={linkedin} onChange={(event => {setLinkedin(event.target.value)})}/>
                            <Input name={"Instagram:"} id={"instagram"} placeholder=" Ex: IcaroCamargo" value={instagram} onChange={(event => {setInstagram(event.target.value)})}/>
                            <Input name={"TikTok:"} id={"tiktok"} placeholder=" Ex: IcaroCamargo" value={tiktok} onChange={(event =>{setTiktok(event.target.value)})}/>
                            <Input name={"Facebook:"} id={"facebook"} placeholder=" Ex: IcaroCamargo" value={facebook} onChange={(event => {setFacebook(event.target.value)})}/>
                        </div>
                        <div className="space-y-4">
                            {
                                links.map((link, index) => {
                                    return (
                                        <div className="flex gap-4">
                                            <Input
                                                name={"Link" + (index + 1)}
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

                <aside className="w-4/12 h-96 p-4">
                    <div className="rounded border-8 p-4 max-w-lg mx-auto">
                        <div className="flex flex-col gap-2 items-center">
                            <span className="block w-16 h-16 rounded-full bg-blue-200"></span>
                            <h1 className="font-bold">{name}</h1>
                        </div>

                        <ul className="flex gap-2 justify-center">
                            {github !=="" && (
                                <li>
                                    <SocialMediaLink link={"https://github.com/" + github}><SiGithub/></SocialMediaLink>
                                </li>
                            )}
                            {linkedin !=="" && (
                                <li>
                                    <SocialMediaLink link={"https://linkedin.com/in/" + linkedin}><GrLinkedin/></SocialMediaLink>
                                </li>
                            )}
                            {instagram !=="" && (
                                <li>
                                    <SocialMediaLink link={"https://instagram.com/" + instagram}><SiInstagram/></SocialMediaLink>
                                </li>
                            )}
                            {tiktok !=="" && (
                                <li>
                                    <SocialMediaLink link={"https://tiktok.com/" + tiktok}><SiTiktok/></SocialMediaLink>
                                </li>
                            )}
                            {facebook !=="" &&(
                                <li>
                                    <SocialMediaLink link={"https://facebook.com" + facebook}><SiFacebook/></SocialMediaLink>
                                </li>
                            )}
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    )
}