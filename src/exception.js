export class MyException extends Error 
{

}

export const callMe = (name) => {
    if (name === "ifqy") {
        throw new MyException("ups")
    } else {
        return "OK"
    }
}