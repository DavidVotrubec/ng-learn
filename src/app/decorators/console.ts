export function Console(message: string) {
    console.log(`Console: ${message}`);

    return function(target: any){
        console.log('our decorated class is', target);
    }
}