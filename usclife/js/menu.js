document.write(

'<div class="menu-bar">'
+    '<ul>'
+       '<li><a href="index.html" id="home">Home</a></li>'
+       '<li><a href="profile.html">Profile</a></li>'
+       '<li><a href="#" class="menu-event-expand">Events</a>'
+           '<span class="menu-expand-btn ui-icon-plus ui-btn-icon-notext" style="width:3px; height: 3px;"></span>'
+            '<ul style="display:none">'
+                '<li><a href="myevent.html" id="profile_event">My Events</a></li>'
+                '<li><a href="recomemdedevents.html" id="profile_event">Recommended</a></li>'
+                '<li><a href="upcoming_event.html" id="profile_event">Upcoming</a></li>'
+                '<li><a href="event_history.html" id="profile_event">History</a></li>'
+                '<li><a href="createevent.html" id="profile_event">Create Event</a></li>'
+            '</ul>'
+       '</li>'
+       '<li><a href="friend.html">Friends</a></li>'
+       '<li><a href="about.html">About</a></li>'
+       '<li><a href="feedback.html">Feedback</a></li>'
+       '<li><a href="signin.html" id="log-in">Log In</a></li>'
+    '</ul>'
+'</div>'

);