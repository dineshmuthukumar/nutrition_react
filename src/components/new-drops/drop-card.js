import React from 'react';
import Image from 'react-bootstrap/Image'   
import './style.scss'

const DropCard = ()=>{

    return <>
        <section className="dropCard-Section" id="drop_1">
            <div className="container">
                <div className="row">
                  <div className="card_title">
                  <h2>Madhushala NFTs</h2> 
                  <p className="small-title mb-3">
                  Amalgamation Of Knowledge, Fulfilment of duties, and Expectations
                  </p>
                  <p>
                  BeyondLife.club brings you the philosophical undertones of Madhushala in Amitabh’s baritone as an NFT!. Now you can own a recorded version of Madhushala, curated by Amitabh Bachchan himself. By owning this one-of-a-kind NFT, you are owning segments of Indian history, a livelihood full of extraordinary scenarios, a guide for betterment, a betterment for a lifetime.  
                  </p>
                  </div>
                </div>
                <div className="row drop_card">
                        <div className="col-lg-6 border-right">
                        <div className="drop-title">
                            <h4 className="mb-4">About Collection</h4>
                            <p>
                            Mr. Harivansh Rai Bachchan (1907–2003), father of Mr. Amitabh Bachchan, wrote Madhushala that depicts the wisdom of Madhu-temple of Mind (Madhushala), karma, imbibement of knowledge, fulfillment of duties, and expectations of an individual from the society into beautiful verses.
                            </p>
                            <p className="mb-4">
                            Madhushala’s Rhyme, Rhythm, and Flavour is still fresh in Amitabh’s mind. He believed and witnessed the miracles that the purest form of art brings in society. However, the love and the respect Mr.Bachchan holds in his heart that compelled him to recite, sing, and translate stories of Madhushala from time to time. 
                            </p>
                        </div>
                        <div className="auction-time">
                                <h5>Auction starting in</h5>
                        </div>
                        <div class="auction-main">
                                <div class="auction-one">
                                    <p class="heading-S">Minimum Price</p>
                                    <h1>TBA</h1>
                                </div>
                                <div class="auction-two">
                                <p class="heading-S">Edition of</p>
                                    <h1>2/2 </h1>        
                                </div>
                            </div>
                            <div className="additional-perks">
                                <h5>Addtional Perk</h5>
                                <p>
                                The highest bidders in the two categories, in addition to the NFTs, will also get to avail a meet-and-greet session with the Big B - A memory that any Amitabh will hold on to more dearly than the NFT itself! 
                                </p>
                        </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="drop-card-post">
                            <Image src="https://amitabh.bafdemo.com/static/media/artist-image.2236b257.png" /> 
                            <div class="learnMore"> <a href="#">Join the waitlist</a> </div>
                            
                            </div>
                        </div>
                    
                </div>
            </div>

        </section>
    
    </>
}

export default DropCard