<!DOCTYPE html>
<html lang="en-AU">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1">
        <meta name="description" content="Design Your Own Sports wear online">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
        <!--    <link rel="stylesheet" href="https://cdn.jsdelivr.net/jquery.slick/1.5.9/slick.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/jquery.slick/1.5.9/slick-theme.css">-->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <!--<script src="https://cdn.jsdelivr.net/jquery.slick/1.5.9/slick.min.js"></script>-->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <!--    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.debug.js" integrity="sha384-NaWTHo/8YCBYJ59830LTz/P4aQZK1sS0SneOgAvhsIl3zBu8r9RevNg5lHCHAuQ/" crossorigin="anonymous"></script>   
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.min.js"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.js"></script> 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/rasterizehtml/1.3.0/rasterizeHTML.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/canvg/1.4/rgbcolor.min.js"></script>
<!-- Optional if you want blur -->
        <!--<script src="https://cdn.jsdelivr.net/npm/stackblur-canvas@^1/dist/stackblur.min.js"></script>
<!-- Main canvg code -->
        <!--<script src="https://cdn.jsdelivr.net/npm/canvg/dist/browser/canvg.min.js"></script>-->
        <link rel="stylesheet" href="assets/css/dyo.css">
        <link rel="stylesheet" href="assets/css/responsive.css">
        
        <!-- <script src="js/modernizr.custom.63321.js"></script> used for the slider -->
        <title>KBS SPORTSWEAR</title>
        
    </head>
    <body>
        <div id="main-header-menu">
            <div id="header">
                <a href="/index.php" title="Home">
                    
                </a>
            </div>
            <div id="cart-items-count" class="cart-icon">
                <ul>
                    <li onmouseover="minicart()" onmouseout="minicarthidden()">
                        <img src="assets/images/carticon.svg">
                        <a id="clicks">0</a>
                    </li>
                    <!--<li> <button class="clear-cart">Clear Cart</button></li>-->
                </ul>
            </div>
            <!--    <div id="mini-cart">
         <table class="mini-product-view">
             
             <tr>
                 <th>Sr. Number</th>
                 <th>Product</th>
                 <th>Description</th>
                 <th>Colour</th>
             </tr>
             <tr>
                 <td></td>
                 <td></td>
         </table>
     </div>-->
            <div id="myNav" class="overlay">
                <!-- Button to close the overlay navigation -->
                <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                <!-- Overlay content -->
                <div class="overlay-content">
                    <a href="/DesignStation.php">Menu 1</a>
                    <a href="/ExpressTeamwear.php">Menu 2</a>
                    <a href="/OnlineShops.php">Menu 3</a>
                    <a href="/Schools/uniforms.php">Menu 4</a>
                    <a href="/Catalogue/catalogues.php">Menu 5</a>
                </div>
            </div>
        </div>
        <!-- Use any element to open/show the overlay navigation menu -->
        <span style="font-size:30px;cursor:pointer" id="navbar-header" onclick="openNav()">&#9776;</span>
        <div id="section">
            <nav class="nav-left" data-link="screen-1">
                <div class="nav-inner">
                    
                    <div id="PRODNAV">
                        <div class="Garment active">
                            <a id="Garment">Garment</a>
                        </div>
                        <div class="Style">
                            <a id="Style">Style</a>
                        </div>
                        <div class="Design">
                            <a id="Design">Design</a>
                        </div>
                        <div class="Customise">
                            <a id="Customise">Customise</a>
                        </div>
                        <div class="SubmitOrder" style="display:none">
                            <a id="SubmitOrder">Submit</a>
                        </div>
                    </div>
                </div>
            </nav>
            <nav class="nav-right" data-link="screen-1">
                <div class="nav-inner">
                    <button id="Previous" style="visibility:hidden">
                        <svg viewBox="0 0 963 963">
                            <path fill="#fcfcfc" d="M481.5,963C747.4,963,963,747.4,963,481.5C963,215.6,747.4,0,481.5,0C215.6,0,0,215.6,0,481.5C0,747.4,215.6,963,481.5,963
    z M271.4,421.8l218.3-238.1c33.6-36.6,90.5-39.1,127.2-5.5c36.6,33.6,39.1,90.5,5.5,127.2L459.8,482.6L617.6,655
    c33.601,36.7,31,93.6-5.6,127.2c-17.3,15.8-39,23.6-60.7,23.6c-24.399,0-48.7-9.8-66.399-29.2L271.3,543.3
                                C239.9,508.9,239.9,456.2,271.4,421.8z"/>
                        </svg>
                    </button>
                    <button id="Next">
                        <svg viewBox="0 0 963 963">
                            <path fill="#fcfcfc" d="M0,481.5C0,747.4,215.6,963,481.5,963C747.4,963,963,747.4,963,481.5C963,215.6,747.4,0,481.5,0C215.5,0,0,215.6,0,481.5z
     M691.601,543.3L478.2,776.601C460.4,796,436.101,805.8,411.8,805.8c-21.699,0-43.5-7.8-60.699-23.6
    c-36.7-33.6-39.2-90.5-5.601-127.2l157.8-172.399L340.601,305.3c-33.601-36.6-31.101-93.6,5.5-127.2
                                c36.6-33.6,93.6-31.1,127.199,5.5l218.2,238.1C723,456.101,723.101,508.9,691.601,543.3z"/>
                        </svg>
                    </button>
                </div>
                <div id="BookletButton" style="visibility:hidden">
                    <ul>
                        <li>
                            <button class="add-to-cart" id="Cart">Add to Booklet</button>
                    </ul>
                </div>
            </nav>
            <noscript>
                <p>
                    Javascript is currently not supported or is disabled by this browser.<br>Please enable JavaScript for full form functionality.
                </p>
            </noscript>
            <form action="DYOOrder.php" method="post" enctype="multipart/form-data" onsubmit="return validateform()">
                <section class="Garment active">
                    <div class="container">
                        <div class="row">
                            <div id="NavDirection" class="col-md-12 col-sm-12">
                                <h2>Select Your <b>Garment</b></h2>
                            </div>
                            <ul id="GarSel" class="FlexBox FlexWrap">
                                <li>
                                    <a id="Singlet">
                                        <img src="assets/images/SingletD.png" alt="Singlet">
                                        <h4>Singlet</h4>
                                    </a>
                                </li>
                                <li>
                                    <a id="Tee">
                                        <img src="assets/images/TeeD.png" alt="Teeshirt">
                                        <h4>Teeshirt</h4>
                                    </a>
                                </li>
                                <li>
                                    <a id="Netball">
                                        <img src="assets/images/NetballD.png" alt="Netball">
                                        <h4>Netball</h4>
                                    </a>
                                </li>
                                <li>
                                    <a id="Polo">
                                        <img src="assets/images/PoloD.png" alt="Polo">
                                        <h4>Polo</h4>
                                    </a>
                                </li>
                                <li>
                                    <a id="Rugby">
                                        <img src="assets/images/RugbyD.png" alt="Rugby">
                                        <h4>Rugby</h4>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <!-- Left Navigations -->
                <!-- End of Left Navigation -->
                <!-- Start of Style Section -->
                <section class="Style">
                    <div class="container">
                        <div class="row">
                            <div id="NavDirection" class="col-md-12 col-sm-12"> 
                                <h2>Select Your <b>Style</b></h2>
                            </div>
                            <ul id="StyleSel"></ul>
                        </div>
                    </div>
                </section>
                
                <!-- Start of Design Section -->
                <section class="Design">
                    <div class="container">
                        <div class="row">
                            <div id="NavDirection" class="col-md-12 col-sm-12">
                                <h2>Choose <b>Design</b> to Edit</h2>
                            </div>
                            <ul id="DesignSel"></ul>
                        </div>
                    </div>
                </section>
                <!-- End of Design Section -->
                <!-- SVG Displays Here -->
                <section class="Customise">
                    <div class="container">
                        <div class="row">
                            
                        
                            <div id="NavDirection" class="col-md-12 col-sm-12">
                                <h2>
                                    <b id="ProdH3"></b>
                                    <b id="ProdP">
                                        <span id="ProdS1"></span>
                                        <span id="ProdS2"></span>
                                    </b>
                                    <span id="ProdS3"></span>
                                </h2>
                                <!--<br><span id="ProdS4">-->
                                <fieldset style="display:none">
                                    <h3>Product Details</h3>
                                    <div>
                                        <label>Product Type</label>
                                        <input type="text" name="ProductType[0]" id="ProductType[0]">
                                    </div>
                                    <div>
                                        <label>Product Style</label>
                                        <input type="text" name="ProductStyle[0]" id="ProductStyle[0]">
                                    </div>
                                    <div>
                                        <label>Product Design</label>
                                        <select name="ProductDesign[0]" id="ProductDesign[0]"></select>
                                    </div>
                                    <div>
                                        <label>Product Code</label>
                                        <input type="text" name="ProductCode[0]" id="ProductCode[0]">
                                    </div>
                                </fieldset>
                                <b></b>
                            </div>
                            <div id="customise-container" class="container-fluid">
                                <div class="row">
                                    <div class="col-md-4 col-sm-4 col-xs-12 left">
                                        <div class="Colour">
                                            <h2>Choose Your <b>Colours</b></h2>
                                            <div class="content">
                                                <fieldset id="fields" class="modal-body" data-dismiss="modal">
                                                    <div id="Colours"></div>
                                                </fieldset>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-4 col-xs-12 center-panel">
                                        <div id="Viewer" class="graphic">
                                            <div id="graphic"></div>
                                            <div id="DYOfooter">
                                                <li>
                                                    <svg id="ViewZoom" viewBox="0 0 100 100">
                                                        <g stroke="#333" stroke-width="7.5">
                                                            <circle cx="40" cy="40" r="33.33" fill="none"/>
                                                            <path d="m23.33 40h33.33"/>
                                                            <path id="Plus" d="m40 23.33v33.33z"/>
                                                            <path d="m63.57 63.57c5 0,30 25,30 30c-5 0,-30 -25,-30 -30" stroke-linejoin="round"/>
                                                        </g>
                                                    </svg>
                                                    <svg id="ViewSwap" viewBox="0 0 100 100">
                                                        <g transform="rotate(270,50,50)" stroke="#333" fill="#333" stroke-width="7.5" stroke-linejoin="round" stroke-linecap="round">
                                                            <path id="flip" d="m20 35a30 30 0 0 1 60 0v10l8-8q0.707-0.707,1.414 0l2 2q0.707 0.707,0 1.414l-13.414 13.414l-13.414-13.414q-.707-.707,0-1.414l2-2q.707-.707,1.414 0l8 8v-10a26 26 0 0 0 -52 0q0 1,-1 1h-2q-1 0,-1-1z"/>
                                                            <use xlink:href="#flip" transform="rotate(180,50,50)" fill="#b0a9a9" stroke="#b0a9a9"/>
                                                        </g>
                                                        <text fill="#fcfcfc" x="50" y="50" font-size="22px" text-anchor="middle" dominant-baseline="central">VIEW</text>
                                                    </svg>
                                                </li>
                                            </div>
                                            <div class="front_back">
                                                <ul id="ViewSel" class="optact"></ul>
                                                <input id="View" type="hidden" value="Front">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-4 col-xs-12 right">
                                        <div class="right-content">
                                            <ul id="OptionSel">
                                                <li id="AnotherDesign">
                                                    <span>CHOSE ANOTHER DESIGN</span>
                                                </li>
                                                <li id="collardiv" onclick="getElementById('ColourPicker').style.display = 'none';">
                                                    <span>COLLARS</span>
                                                    <ul id="CollarSel" class="optact"></ul>
                                                    <select class="hide" name="CollarStyle" id="CollarStyle"></select>
                                                </li>
                                                <li id="seniordiv">
                                                    <span>SENIORS</span>
                                                    <ul id="SeniorSel" class="optact">
                                                        <li>
                                                            <a id="NoSeniorText" title="No Senior Text" class="chosen">
                                                                <img src="assets/images/SeniorNo.jpg" alt="No Senior Text">
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a id="SeniorText" title="Senior Text">
                                                                <img src="assets/images/SeniorYes.jpg" alt="Senior Text">
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <select class="hide" name="SeniorStyle" id="SeniorStyle">
                                                        <option value="NoSeniorText" selected>NoSeniorText</option>
                                                        <option value="SeniorText">SeniorText</option>
                                                    </select>
                                                </li>
                                                <li id="bibdiv">
                                                    <span>BIBS</span>
                                                    <ul id="BibSel" class="optact">
                                                        <li>
                                                            <a id="NoBib" title="No Bib Set">
                                                                <img src="assets/images/BibNo.jpg" alt="No Bib">
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a id="YesBib" title="Add velcro and Bib set" class="chosen">
                                                                <img src="assets/images/BibYes.jpg" alt="Bib">
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <select class="hide" name="BibStyle" id="BibStyle">
                                                        <option value="NoBib">NoBibs</option>
                                                        <option value="YesBib" selected>Bibs</option>
                                                    </select>
                                                </li>
                                                <li id="numberdiv">
                                                    <span>NUMBERS</span>
                                                    <ul id="NumberSel" class="optact">
                                                        <li>
                                                            <a id="NoNumber" title="No Number" class="chosen">
                                                                <img src="assets/images/NumberNone20.svg" alt="No Number">
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a id="StandardNumber" title="Standard Number">
                                                                <img src="assets/images/NumberStandard20.svg" alt="Standard Number">
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a id="OutlineNumber" title="Outlined Number">
                                                                <img src="assets/images/NumberOutline20.svg" alt="Outline Number">
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <select class="hide" name="NumberStyle" id="NumberStyle">
                                                        <option value="NoNumber" selected>NoNumber</option>
                                                        <option value="StandardNumber">StandardNumber</option>
                                                        <option value="OutlineNumber">OutlineNumber</option>
                                                    </select>
                                                </li>
                                                <li id="logodiv">
                                                    <span class="popup" onclick="">LOGOS</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- SVG sections ends -->
                <div id="SubMain">
                    <section class="SubmitOrder">
                        <div class="container">
                            <div class="row">
                                <div id="BookletOverview" class="slider-area">
                                    <div class="col-md-12" id="CARTNAVIGATION">
                                        <a id="add-another-product">
                                            <svg viewBox="0 0 100 100">
                                                <circle cx="50" fill="#333" cy="50" r="47.5"></circle>
                                                <path stroke="#EEE" stroke-linecap="round" stroke-linejoin="round" stroke-width="20" d="m50 25v50M25 50h50"></path>
                                            </svg>
                                            <br>ADD ANOTHER PRODUCT
                                        </a>
                                    </div>
                                    <div class="col-md-12" id="BookletDesigns"></div>
                                    <div class="col-md-12">
                                        <div class="editbooklet">
                                            <a id="Edit" class="Edit">Edit</a>
                                            <a id="Delete" class="Delete">Delete</a>
                                            <span class="Download">
                                                <a onclick="print_current_page()">
                                                    <img src="assets/images/download.png">Print and Save Booklet
                                                </a>
                                            </span>
                                            <p style="color:Red;font-size:16px;font-weight:600;margin-top:10px;">To save PDF to your computer, ensure you set the “ Print Destination” to “Save as PDF”</p>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="multipleproducts">
                                            <a id="lastdesign" class="lastdesign">
                                                <svg viewBox="0 0 100 100">
                                                    <circle cx="50" cy="50" r="47.5"></circle>
                                                    <path stroke="#EEE" stroke-linecap="round" fill="none" stroke-linejoin="round" stroke-width="20" d="m57.5 25l-25 25 25 25"></path>
                                                </svg>
                                            </a>
                                            <a id="nextdesign" class="nextdesign">
                                                <svg viewBox="0 0 100 100">
                                                    <circle cx="50" cy="50" r="47.5"></circle>
                                                    <path stroke="#EEE" stroke-linecap="round" fill="none" stroke-linejoin="round" stroke-width="20" d="m42.5 25l25 25 -25 25"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="EnquiryForm">
                                    <div class="content">
                                        <fieldset id="contact">
                                            <div>
                                                <input name="Name" type="text" id="Name" required placeholder="Name" autocomplete="name">
                                            </div>
                                            <div>
                                                <input name="Phone" type="tel" id="Phone" required placeholder="Phone" autocomplete="tel">
                                            </div>
                                            <div>
                                                <input name="Email" type="email" id="Email" required placeholder="Email" autocomplete="email">
                                            </div>
                                            <div>
                                                <input name="Address" type="text" id="Address" placeholder="Street Address" autocomplete="shipping street-address">
                                            </div>
                                            <div>
                                                <input name="Suburb" type="text" id="Suburb" placeholder="Suburb" autocomplete="shipping address-level2">
                                            </div>
                                            <div>
                                                <input name="State" type="text" id="State" placeholder="State" list="States" autocomplete="shipping address-level1">
                                            </div>
                                            <datalist id="States">
                                                <option value="QLD">
                                                <option value="NSW">
                                                <option value="VIC">
                                                <option value="SA">
                                                <option value="WA">
                                                <option value="TAS">
                                                <option value="NT">
                                                <option value="ACT">
                                            </datalist>
                                            <div>
                                                <input name="Postcode" type="text" id="Postcode" placeholder="Post Code" autocomplete="shipping postal-code" pattern="^\d{4}$">
                                            </div>
                                            <div>
                                                <input type="text" name="TeamName" id="TeamName" placeholder="Team Name">
                                            </div>
                                            <div>
                                                <input type="text" name="Clubschool" id="Clubschool" placeholder="Club or School">
                                            </div>
                                            <div>
                                                <input type="text" name="Competition" id="Competition" placeholder="Competition">
                                            </div>
                                            <div>
                                                <input name="Quantity" type="number" id="Quantity" placeholder="Quantity" min="0" step="1">
                                            </div>
                                            <div>
                                                <textarea name="Comments" id="Comments" placeholder="Comments"></textarea>
                                            </div>
                                            <datalist id="Referrerlist">
                                                <option value="Repeat Customer">
                                                <option value="Search Engine">
                                                <option value="Mailout">
                                                <option value="Facebook">
                                                <option value="Instagram">
                                                <option value="Word of Mouth">
                                            </datalist>
                                            <div>
                                                <input type="text" placeholder="How did you hear about us?" name="Referrer" list="Referrerlist">
                                            </div>
                                            <div id="validate">
                                                <div id="recaptcha" class="g-recaptcha">
                                                    <div id="captcha"></div>
                                                </div>
                                                <script>
                                                    var onloadCallback = function() {
                                                        grecaptcha.render('captcha', {
                                                            'sitekey': '6LcyjMASAAAAAFhxIaBo6JLFViCvQS2UrjCDtqZq'
                                                        })
                                                    };
                                                </script>
                                                <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit&hl=en-GB" async defer></script>
                                                <input class="submit-button" class="submitstyle" type="submit" id="Submit" onmouseover="msgalert()" value="Submit">
                                            </div>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div class="col-md-4">
                        <section class="Colour"></section>
                        <section class="Logos">
                            <h2>Copyright Approval</h2>
                            <div id="CopyApproval" class="content">
                                <input name="Copyright" id="Copyright" type="checkbox" value="Approved">
                                <label for="Copyright" id="CopyRights">I have approval from the authorised copyright and trademark holders to use all of the logos that I have provided.
      </label>
                            </div>
                        </section>
                        <div class="pager" style="display:none">
                            <button class="btn btn-primary-navdirection-next" type="button" id="Save">
                                <span class="fa fa-save"></span>
                                Save For Later
                            </button>
                            <button class="btn btn-primary-navdirection-previous" type="button">&laquo;Previous</button>
                            <button onclick="myFunction()" class="btn btn-primary-navdirection-next" type="button" id="Next">Next &raquo;</button>
                            <div class="disclaimer">
                                <h4>DISCLAIMER</h4>
                                <p>Products displayed online are a visual representation only and may vary slightly to artwork proofs sent to the customer.
                                 </p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        <!-- End of logo section -->
        <div id="Additional" style="display:none">
            <div class="additional_info" style="display:none">
                <div class="content">
                    <div class="additional">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="single_newsletter left m-t-1 text-md-left text-sm-center text-xs-center wow zoomIn">
                                        <h4>Additional Information</h4>
                                        <p id="ProductInfo1"></p>
                                        <p id="ProductInfo2">
                                            No minimum order quantity. Standard Delivery Time is <span id="DelTime">4-6</span>
                                            Weeks from Art Approval &amp;Deposit Payment. Free Player Names &amp;Numbers, School\Club &amp;Sponsor Logos if supplied in correct format.
                                        </p>
                                        <p id="ProductInfo3">A surcharge applies to orders under 10 units. Delivery times may be longer during peak season, customer will be advised of estimated delivery time when placing the order. Set-up fees may apply if artwork is not supplied in the correct format.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <script src="assets/js/custom.js"></script>
</div>
</body>
</html>
