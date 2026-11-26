getScrolling();  // call the function below.

function getScrolling(){
   // get the current system date
   // create an array containing the months
   var monthNames = ["JANUARY","FEBRUARY","MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
   var theDate = new Date();
   var theDay = theDate.getDate();
   var theMonth = theDate.getMonth();
   var theYear = theDate.getFullYear();
   var theHour = theDate.getHours();
   var presenterName; 
   var fullDateStr = theDay + " " + monthNames[theMonth] + " " + theYear;
   
   // between midnight and 6pm it is overnight
   if (theHour >=0 && theHour<6) {presenterName="The Overnight Express";}

   // between 6am and 10am it is breakfast 
   if (theHour >=6 && theHour<11) {presenterName="Breakfast with Stuart Clarkson";}

   // between 10am and 2pm it is mid mornings 
   if (theHour >=10 && theHour<14) {presenterName="Mid Mornings with Nick Bewes";}

   // between 2pm and 7pm it is afternoon drive
   if (theHour >=14 && theHour<19) {presenterName="Afternoon Drive with Alex Cann";}

   // between 7pm and 12am it is evenings 
   if (theHour >=19 && theHour<0) {presenterName="Evenings with Nick Babb";}

   var scrollMessage = "Welcome to TripleR, the date is " + fullDateStr + " you are listening to " + presenterName;

   document.getElementsByTagName("marquee")[0].innerHTML = scrollMessage; 

}

