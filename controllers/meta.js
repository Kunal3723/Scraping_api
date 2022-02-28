import urlMetadata from "url-metadata";

//function to get metadata from url
// I have used the "urlMetadata" library to scrap the url
export async function getUrlData(req, res) {
    try {
        const url = "https://www.amazon.com/Razer-Kraken-Ultralight-Gaming-Headset/dp/B07RMC5BRL/"
        const metadata = await urlMetadata(url)
        res.status(200).send(metadata);
    } catch (error) {
        res.status(404).send(error.message);
    }
};





