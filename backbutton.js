<script type="text/javascript">
        jQuery(document).ready(function($) {
				if (window.history && window.history.pushState) {
				window.history.pushState('forward', null, './#forward');
				$(window).on('popstate', function() {
				document.location='http://google.com';
				});
			}
        });
 </script>