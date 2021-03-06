<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>VMware Cloud Transformation Day 2019</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <script type="text/javascript">
        (function (id) {
            function append(scriptid, url, async) {
                var d = document, sn = 'script', f = d.getElementsByTagName(sn)[0];
                if (!f) f = d.head;
                var s = d.createElement(sn);
                s.async = true;
                s.id = scriptid;
                s.src = url;
                f.parentNode.insertBefore(s, f);
            }

            function getRootDomain() {
                var parts = window.location.hostname.split('.');
                if (parts.length === 2) rootDomain = parts[0];
                else if (parts.length > 2) {
                    // see if the next to last value is a common tld
                    var part = parts[parts.length - 2];
                    if (part === 'com' || part === 'co') {
                        rootDomain = parts[parts.length - 3]; // go back one more
                    } else {
                        rootDomain = part;
                    }
                }
                return rootDomain;
            }

            window.evidon = {};
            window.evidon.id = id;
            var cdn = '//c.evidon.com/', rootDomain = getRootDomain(), noticecdn = cdn + 'sitenotice/';
            append('evidon-notice', noticecdn + 'evidon-sitenotice-tag.js', false);
            append('evidon-location', cdn + 'geo/country.js', true);
            append('evidon-themes', noticecdn + id + '/snthemes.js', true);
            if (rootDomain) append('evidon-settings', noticecdn + id + '/' + rootDomain + '/settings.js', true);
            window.evidon.priorConsentCallback = function () {
// Add the tags which need to wait for prior consent here.
// This should be all your advertising tags and probably most of your social and tracking tags.
            }
        })(4478);
    </script>


    <link rel="stylesheet" href="css/bootstrap.min.css">
    <script src="js/jquery.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <link rel="stylesheet" type="text/css" href="css/style.css">

    <link rel="stylesheet" href="https://www.vmware.com/content/dam/vmwaredesigns/scraper/responsive-microsites.css"/>
    <!--<link rel="stylesheet" type="text/css" href="https://www.vmware.com/content/dam/vmwaredesigns/scraper/scrapper-footer.css"/>-->

    <script src="js/translations.js"></script>
    <script src="js/jquery.validate.js"></script>


</head>

<body>
<div class="container">
    <div class="wrapper">
        <div class="banner">
            <img src="images/reg-banner.jpg" class="img-fluid">
            <div class="caption-wrapper">
                <div class="logo-box">
                    <img src="images/vmware-evolve.jpg">
                </div>
                <h1>Register for VMware Evolve<br>
                    Cloud Transformation Summit, 2019</h1>
            </div>
        </div>

        <div class="wrapper-mid">
            <div class="row">
                <div class="col-md-7">

                    <p>Digital transformation is all about creating new possibilities for your business. Companies are
                        using digital technology to drive nimble innovation, find better ways of working, adopt
                        inventive business models, and deliver engaging new customer experiences. </p>

                    <p>In a world where software creates unlimited possibilities, Business and IT leaders are aligning
                        more closely as their companies realize the benefits of digital transformation, recognizing that
                        technology is critical to achieving business goals. VMware frees your enterprise to create your
                        own future by giving you the flexibility, freedom, and control to support your unique business
                        and transformation journey. </p>

                    <p>At the <strong>Cloud Transformation Summit,</strong> you’ll to learn how:</p>
                    <ul>
                        <li>To accelerate business agility and innovation, VMware helps you Accelerate Cloud Journey
                            that give developers freedom of choice—and control.
                        </li>
                        <li>To ensure exceptional mobile experiences, VMware helps you empower the digital workspace.
                        </li>
                        <li>To ensure the safety of your brand and maintain your customers’ trust, VMware delivers news
                            ways to transform network & security.
                        </li>
                        <li>Transformative technology agenda with a unique, end-to-end integrated architecture and
                            strategic technology solutions.
                        </li>
                    </ul>


                </div>
                <div class="col-md-5">
                    <div class="form-wrapper">
                        <h2>RSVP NOW<br>
                            <small>All fields are required</small>
                        </h2>
                        <form id="registration" name="registration" action="process.php" method="post">
                            <input type="hidden" name="language" value="ENGLISH">
                            <input type="hidden" name="action" value="Registration">
                            <div class="form-group">
                                <input type="text" name="email_id" class="form-control" placeholder="Enter your work email">
                            </div>

                            <div class="form-group">
                                <input type="text" name="first_name" class="form-control" placeholder="Enter your first name">
                            </div>

                            <div class="form-group">
                                <input type="text" name="last_name" class="form-control" placeholder="Enter your last name">
                            </div>
                            <div class="form-group">
                                <input type="text" name="company_name" class="form-control" placeholder="Enter your company">
                            </div>
                            <div class="form-group">
                                <input type="text" name="designation" class="form-control" placeholder="Enter your Designation">
                            </div>

                            <select name="city" class="custom-select mb-3" required title="Please select city!">
                                <option value="">Select City</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Delhi"> Delhi</option>
                                <option value="Bengaluru">Bengaluru</option>
                            </select>

                            <div class="form-group">
                                <input type="text" name="postal_code" class="form-control" placeholder="Zip or Postal Code">
                            </div>
                            <div class="form-group">
                                <input type="text" name="phone_no" class="form-control" placeholder="Business Phone">
                            </div>

                            <div class="form-group">
                                <input type="hidden" name="language" value="ENGLISH">
                                <input type="checkbox" name="is_agree" id="is_agree" value="YES" checked>
                                &nbsp;<span id="translatedText"></span>
                            </div>

                            <button type="submit" class="btn btn-primary btd">Submit</button>
                        </form>

                    </div>

                </div>
            </div>

            <h1>AGENDA</h1>
            <hr>

            <table class="table table-bordered1">
                <tbody>
                <tr>
                    <td>Registration & Coffee</td>
                </tr>
                <tr>
                    <td>Keynote: Innovating from Data Center to Cloud to Edge Morning Sessions
                        <ul>
                            <li>Building Your Hybrid Cloud Strategy</li>
                            <li>The Ultimate Hybrid Cloud with VMware Cloud Foundation</li>

                        </ul>
                    </td>
                </tr>

                <tr>
                    <td>Afternoon Sessions
                        <ul>
                            <li>Cloud Migration with VMC on AWS</li>
                            <li>Achieving a Comprehensive Multi-Cloud Strategy with CloudHealth</li>
                            <li>Enterprise Kubernetes at Scale</li>
                        </ul>
                    </td>
                </tr>

                <tr>
                    <td>Networking</td>
                </tr>

                </tbody>
            </table>
        </div>

    </div>
</div>
<div id="page-footer"></div>
<script type="text/javascript" src="js/scrapper.us.js"></script>

<script type="text/javascript" src="js/responsive.js"></script>

<script>
    // Wait for the DOM to be ready
    $(function() {
        // Initialize form validation on the registration form.
        // It has the name attribute "registration"
        $("form[name='registration']").validate({
            // Specify validation rules
            rules: {
                // The key name on the left side is the name attribute
                // of an input field. Validation rules are defined
                // on the right side
                first_name: "required",
                last_name: "required",
                company_name: "required",
                designation: "required",
                city: {
                    required: true
                },
                postal_code: "required",
                is_agree: "required",
                phone_no: {
                    required: true,
                    number: true
                },
                email_id: {
                    required: true,
                    // Specify that email should be validated
                    // by the built-in "email" rule
                    email: true
                }
            },
            // Specify validation error messages
            messages: {
                first_name: "Please enter your first name",
                last_name: "Please enter your last name",
                company_name: "Please enter your company name",
                designation: "Please enter your designation",
                city: "Please enter your city",
                postal_code: "Please enter your postal code",
                is_agree: "Please select yes",
                phone_no: "Please enter a valid phone number",
                email_id: "Please enter a valid email address"
            },
            // Make sure the form is submitted to the destination defined
            // in the "action" attribute of the form when valid
            submitHandler: function(form) {
                form.submit();
            }
        });

    });
</script>
</body>
</html>
