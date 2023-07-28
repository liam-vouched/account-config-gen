function back() {
    event.preventDefault();
    var configSection = document.getElementById("configSection")
    var summarySection = document.getElementById("summarySection")
    var reviewForm = document.getElementById("reviewForm")

    configSection.style.cssText = 'display:inline !important';
    summarySection.className = 'col-md-5 col-lg-4 order-md-last';

    reviewForm.style.cssText = 'display: !important';

    finalSection.style.cssText = 'display:none !important';
    document.getElementById("summaryTitle").innerHTML = "Summary";
}

function downloadPDF() {

    var clientName = document.getElementById("clientName").value
    // Create the date
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
    let currentDate = `${month}/${day}/${year}`;
    fileName = clientName + "_VouchedReport" + "_"+ currentDate
    document.title=fileName
    window.print();

}

function review(){
    event.preventDefault();
    var configSection = document.getElementById("configSection")
    var summarySection = document.getElementById("summarySection")

    var reviewForm = document.getElementById("reviewForm")
    var clientName = document.getElementById("clientName").value

    var summaryTitle = document.getElementById("summaryTitle").innerHTML

    var finalSection = document.getElementById("finalSection")

    // hide the config section
    configSection.style.cssText = 'display:none !important';
    summarySection.className = 'col-md-12 col-lg-12';
    console.log("Review function activated")

    // Hide the entire bottom next / clientName name section
    reviewForm.style.cssText = 'display:none !important';

    // Create the date
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
    let currentDate = `${month}/${day}/${year}`;

    // Update title to match customer

    document.getElementById("summaryTitle").innerHTML = "Account Summary for " + clientName;
    document.getElementById("printableDate").innerHTML = currentDate
    // Show the final download and back buttons
    finalSection.style.cssText = 'display:inline !important;';

    // Hide the top title areas
    document.getElementById("accountConfig_title").style.cssText = 'display:none !important';
    document.getElementById("accountConfig_description").style.cssText = 'display:none !important';
}

function everyClick(){  
 var vouchedVersion = document.getElementById("vouchedVersion").value


 // Hide or show based on Vouched Now / version

 var jsOnlyOptions = document.getElementsByClassName('jsOnly');
 if (vouchedVersion == "Vouched Now") {
    for (eachOption of jsOnlyOptions) {
        eachOption.style.display = 'none';
    }
 }

 if (vouchedVersion == "JS Plugin") {
    for (eachOption of jsOnlyOptions) {
        eachOption.style.display = '';
    }
 }

 // Hide or Show Selfie Liveness fields based on Type
 var type = document.getElementById("type").selectedOptions[0].innerHTML
 var selfieSections = document.getElementsByClassName('selfieTypeRequired');

 if (type == "ID Only") {
    for (eachSelfieSection of selfieSections) {
        eachSelfieSection.style.cssText = 'display:none !important';
        console.log("ID only selected")
    }
 }

 if (type != "ID Only") {
    for (eachSelfieSection of selfieSections) {
        eachSelfieSection.style.cssText = 'display: !important';
        console.log("Other mode selected")
    }
 }

 // Hide or Show based on Theme selection (avant conf etc)

 var theme = document.getElementById("theme").selectedOptions[0].innerHTML
 var avantSections = document.getElementsByClassName('avantOnly');

 if (theme == "Avant") {
    for (eachAvantSection of avantSections) {
        eachAvantSection.style.cssText = 'display:';
        console.log("Avant Selected")
    }
 }

 if (theme != "Avant") {
    for (eachAvantSection of avantSections) {
        eachAvantSection.style.cssText = 'display:none !important';
        console.log("Verbose Selected")
    }
 }

 // Update the Summary Section

 //Vouched Version

 document.getElementById("summary_version").innerHTML = document.getElementById('vouchedVersion').selectedOptions[0].innerHTML

 // Theme
 document.getElementById("summary_theme").innerHTML = document.getElementById('theme').selectedOptions[0].innerHTML
 
 // Type
 document.getElementById("summary_type").innerHTML = document.getElementById('type').selectedOptions[0].innerHTML

 // Selfie Liveness

 document.getElementById("summary_selfie_liveness").innerHTML = document.getElementById('selfieLiveness').selectedOptions[0].innerHTML

 // ID Liveness
 document.getElementById("summary_id_liveness").innerHTML = document.getElementById('idLiveness').selectedOptions[0].innerHTML

// Selfie Uploads
document.getElementById("summary_selfie_uploads").innerHTML = document.getElementById('selfieUploads').selectedOptions[0].innerHTML


// ID Uploads
document.getElementById("summary_id_uploads").innerHTML = document.getElementById('idUploads').selectedOptions[0].innerHTML

//Barcode
document.getElementById("summary_barcode").innerHTML = document.getElementById('barcode').selectedOptions[0].innerHTML

// Crosscheck

document.getElementById("summary_crosscheck").innerHTML = document.getElementById('crossCheck').selectedOptions[0].innerHTML


// DarkWeb

document.getElementById("summary_darkweb").innerHTML = document.getElementById('darkWeb').selectedOptions[0].innerHTML


// DLV

document.getElementById("summary_dlv").innerHTML = document.getElementById('dlv').selectedOptions[0].innerHTML


// AML

document.getElementById("summary_aml").innerHTML = document.getElementById('aml').selectedOptions[0].innerHTML


// User Confirmations
document.getElementById("summary_userConf").innerHTML = document.getElementById('userConf').selectedOptions[0].innerHTML

//Notes
document.getElementById("summary_notes").innerHTML = document.getElementById('notes').value



//// Toggle Icons based on selection

// Barcode Icon
var barcodeStatus = document.getElementById("summary_barcode").innerHTML
if (barcodeStatus == "Enabled"){
    document.getElementById("barcode_success").style.cssText="display:inline !important";
    document.getElementById("barcode_warning").style.cssText="display:none !important";

}

if (barcodeStatus == "Disabled"){
    document.getElementById("barcode_success").style.cssText="display:none !important";
    document.getElementById("barcode_warning").style.cssText="display:inline !important";

}

// Selfie Upload Icon
var selfieUploadStatus = document.getElementById("summary_selfie_uploads").innerHTML
if (selfieUploadStatus == "Disabled"){
    document.getElementById("selfieUpload_success").style.cssText="display:inline !important";
    document.getElementById("selfieUpload_warning").style.cssText="display:none !important";

}

if (selfieUploadStatus == "Enabled"){
    document.getElementById("selfieUpload_success").style.cssText="display:none !important";
    document.getElementById("selfieUpload_warning").style.cssText="display:inline !important";

}


// ID Upload Icon
var idUploadStatus = document.getElementById("summary_id_uploads").innerHTML
if (idUploadStatus == "Disabled"){
    document.getElementById("idUpload_success").style.cssText="display:inline !important";
    document.getElementById("idUpload_warning").style.cssText="display:none !important";

}

if (idUploadStatus == "Enabled"){
    document.getElementById("idUpload_success").style.cssText="display:none !important";
    document.getElementById("idUpload_warning").style.cssText="display:inline !important";

}

// Crosscheck Icon
var crosscheckStatus = document.getElementById("summary_crosscheck").innerHTML
if (crosscheckStatus == "Enabled"){
    document.getElementById("crosscheck_success").style.cssText="display:inline !important";
    document.getElementById("crosscheck_warning").style.cssText="display:none !important";

}

if (crosscheckStatus == "Disabled"){
    document.getElementById("crosscheck_success").style.cssText="display:none !important";
    document.getElementById("crosscheck_warning").style.cssText="display:inline !important";

}

// Darkweb Icon
var darkwebStatus = document.getElementById("summary_darkweb").innerHTML
if (darkwebStatus == "Enabled"){
    document.getElementById("darkweb_success").style.cssText="display:inline !important";
    document.getElementById("darkweb_warning").style.cssText="display:none !important";

}

if (darkwebStatus == "Disabled"){
    document.getElementById("darkweb_success").style.cssText="display:none !important";
    document.getElementById("darkweb_warning").style.cssText="display:inline !important";

}

// DLV Icon
var dlvStatus = document.getElementById("summary_dlv").innerHTML
if (dlvStatus == "Enabled"){
    document.getElementById("dlv_success").style.cssText="display:inline !important";
    document.getElementById("dlv_warning").style.cssText="display:none !important";

}

if (dlvStatus == "Disabled"){
    document.getElementById("dlv_success").style.cssText="display:none !important";
    document.getElementById("dlv_warning").style.cssText="display:inline !important";

}

// AML Icon
var amlStatus = document.getElementById("summary_aml").innerHTML
if (amlStatus == "Enabled"){
    document.getElementById("aml_success").style.cssText="display:inline !important";
    document.getElementById("aml_warning").style.cssText="display:none !important";

}

if (amlStatus == "Disabled"){
    document.getElementById("aml_success").style.cssText="display:none !important";
    document.getElementById("aml_warning").style.cssText="display:inline !important";

}




}  

// Update on every click
document.body.addEventListener("click", everyClick)
