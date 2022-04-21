Vue.component('whyus',
{
    props : ["id"],
    template : `<div :class="'animated fadeInRight component why-us' + id">
                <h3>Application History
                    <h5>This web application was originally developed as a school project for ARU final project, 
                    however, it quickly became more than a project to the student as he plans to constanly build and develop on it
                    to ensure that users can live out his dream of finding sweat nearby.</h5><hr class="hrhr">
                </h3>
                <h3> About
                <h5> The application is being developed to help friends who may be short one or two persons to be able to post their sporting event on the application and get two random people to join their event. For example, imagine having set a day for a 5v5 round of football and three members cancel a couple hours before the game, at this point the game becomes one sided or boring as there will only be 7 members present. With this application it will become easier for these 7 members to find 3 random persons to join the game and make the game a 5v5 again. </h5><hr class="hrhr">
                </h3>
                <h3> Commercial Use
                    <h5> On the commercial side of things, the application can also help organizations easily organize sporting events. The organizations will be able to sign up their players and create games. The users will then accept invitations to these games and allow the organization(s) to properly manage the event. Economically this could raise the bar for organizations who typically host competitive sporting events. It could easily be used as an incentive for the average person to deal with an organization who uses the app as they will seem more organized as opposed to an organization who organizes their competitions via messages or emails </h5>
                </h3>
                </div>`

});
