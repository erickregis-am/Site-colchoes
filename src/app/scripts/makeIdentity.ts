export function makeIdentity(){

    const alphabet: string = "abcdfjklmnopqrstuvwxyzABCDEFJKLMNOPQRSTUVWXYZ1234567890";
    var identity: string = "";

    for (var i = 0; i < 6; i++){
        identity += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }

    return identity;
}