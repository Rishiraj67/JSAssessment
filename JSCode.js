/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

const NFTs=[]

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

function mintNFT(_name,_colour,_type,_price) {
    const NFT = {
        name: _name,
        colour: _colour,
        type: _type,
        price: _price
    }
    NFTs.push(NFT);
    console.log("Minted : ",_name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for(let i=0;i<NFTs.length;i++){
        console.log("\nName :\t",NFTs[i].name);
        console.log("Colour :",NFTs[i].colour);
        console.log("Type :\t",NFTs[i].type);
        console.log("Price :\t",NFTs[i].price);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total Supply: ",NFTs.length);
}

// call your functions below this line

mintNFT("kawasaki ninja h2r"," Mirror Coated Spark Black","Sports Bike","$57,500");
mintNFT("Harley-Davidson x440","Mustard Denim","cruiser","$3,257");
mintNFT("BMW G 310 GS","Pearl White Metallic","Off-road bike","$6,485");
mintNFT("KTM 390 Adventure","Pitch-Black","Dual sport","$7,399");
listNFTs();
getTotalSupply();
