import postcodes from '../../common/data/postcodes'
interface SearchPostcode {
    id: number;
    title: string;
    name: string;
    surname: string;
    postcode: string;
}
export const searchPostcode = (input:string) => {
    const postCodeArray = postcodes
    if (input === " ") return null
    const postCodeResult = postCodeArray.filter((postcode)=> {
        return Object.values(postcode).join(" ").toLowerCase().includes(input.toLowerCase())
    })
    return {id: postCodeResult[0].id, title: postCodeResult[0].title, name: postCodeResult[0].name, surname: postCodeResult[0].surname, postcode: postCodeResult[0].postcode}
}

