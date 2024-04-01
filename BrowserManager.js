import puppeteer from 'puppeteer'

class BrowserManager {
    constructor(){
        this.browser;
        this.pages = [];
    }

    async init(url){
        try{
            this.browser = await puppeteer.launch({
                headless: false,
            });
            this.pages.push(await this.browser.newPage());
            await this.pages[this.pages.length - 1].goto(url);
        }
        catch(e){
            console.log("Erro ao inicializar o navegador: " + e);
        }
    }

    //Não utilizar por enquanto
    async newPage(){
        try{
            this.pages.push(await this.browser.newPage());
        }
        catch(e){
            console.log("Erro ao adicionar nova aba: " + e);
        }
    }

    async goto(tabNumber = 1, url){
        try{
            await this.pages[tabNumber - 1].goto(url);
        }
        catch(e){
            console.log("Erro ao tentar acessar " + url + " na aba " + tabNumber + ": " + e);
        }
    }

    async close(){
        try{
            await this.browser.close();
        }
        catch(e){
            console.log("Erro ao tentar fechar o browser: " + e);
        }
    }

    // getPages(){
    //     return this.pages;
    // }
}

export default BrowserManager