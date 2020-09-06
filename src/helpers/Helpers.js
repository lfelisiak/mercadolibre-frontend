export const convertNewLineToBr = (text)=>{
    return text.replace(/\n/g, "<br />");
}
export const priceParser = (price)=>{
    return `$ ${price}`
}
export const translateWords = async (text) => {
    //const WordsList = await import('../config/wordsList.json'); 
   /* console.log(WordsList.find((word)=>{
        return word.text === text;
    },text))*/
    return `${text}`;   
}
