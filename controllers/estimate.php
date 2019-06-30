<?php 
if($_SERVER['REQUEST_METHOD'] != 'POST'){
	die('Invalid Request');
}
else{

	// Requirement
	$i_need = '';
	$i_want = '';

	foreach ($_POST['i_need'] as $key => $value) {
		$i_need .= htmlspecialchars($value) . ', ';
	}
	if(isset($_POST['i_want'])){
		foreach ($_POST['i_want'] as $key => $value) {
			$i_want .= htmlspecialchars($value) . ', ';
		}
	}
	// user_data 
	$name 	= htmlspecialchars($_POST['name']);
	$email	= filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
	$tel	= htmlspecialchars($_POST['tel']);

	// project Info
	$company		= htmlspecialchars($_POST['company']);
	$description 	= htmlspecialchars($_POST['description']);

	$compose_body 	= 


		$email_headers  =      'MIME-Version: 1.0' . "\r\n";
		$email_headers .=      'Content-type: text/html; charset=iso-8859-1' . "\r\n";
		$email_headers .=      'From: Deephive.org';
                      			
		$email_content = '

<table width="100%" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#d0d0d0" style="padding: 0; margin: 0;">
  <!-- START OF TOP BAR-->
  <tr>
    <td class="full_width" align="center" width="100%" bgcolor="#d0d0d0" style=""><div class="div_scale" style="width:600px;">
        <table class="table_scale" width="600" HEIGHT="42" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#494949" style="padding:0; margin: 0;">
          <tr>
            <td class="spacer" width="20" align="left" valign="top" bgcolor="#494949" style="margin: 0 !important; padding: 0 !important; line-height: 0 !important;">&nbsp;</td>
            <!-- START OF SUBJECT LINE-->
            <td class="subject_line" align="left" valign="middle" width="270" bgcolor="#494949" style="padding-top: 10px; padding-bottom: 10px;"><table width="100%">
                <tr>
                  <td class="center" align="" valign="" style="font-family:Arial, sans-serif; font-style: italic; color:#d8d8d8; font-size:11px; line-height:18px;">'.$name.'</td>
                </tr>
              </table></td>
            <!-- END OF SUBJECT LINE-->
            <td class="spacer" width="20" align="left" valign="top" bgcolor="#494949" style="margin: 0 !important; padding: 0 !important; line-height: 0 !important;">&nbsp;</td>
            <!-- START OF CONTACT-->
            <td class="contact" align="right" valign="middle" width="270" bgcolor="#494949" style="padding: 0px;"><table width="100%">
                <tr>
                  <td class="center" align="" valign="" style="text-align: right; font-family:Arial, sans-serif; font-style: italic; color:#d8d8d8; font-size:11px; line-height:100%;padding-right: 10px"><img src="https://i.imgur.com/RxR11qU.png?1" alt="email" width="20" height="11" style="display: inline; vertical-align: middle;" />'.$email.'</td>
                </tr>
              </table></td>
            <!-- END OF CONTACT-->
          </tr>
        </table>
      </div></td>
  </tr>
  <!-- END OF TOP BAR-->
  <!-- START OF VERTIXAL SPACER BLOCK-->
  <tr>
    <td class="full_width" align="center" width="100%" bgcolor="#d0d0d0" style=""><div class="div_scale" style="width:600px;">
        <table class="table_scale" width="600" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#d0d0d0" style="padding:0; margin: 0;">
          <tr>
            <td class="td_scale" width="600" height="40" bgcolor="#d0d0d0" align="center" valign="middle" style="height: 40px; padding: 0px; font-size:0 ; color:#686868; font-family: Arial,sans-serif; line-height: 0; ">&nbsp;</td>
          </tr>
        </table>
      </div></td>
  </tr>
  <!-- END OF VERTIXAL SPACER BLOCK-->
  <!-- START OF FEATURED AREA BLOCK-->
  <tr>
    <td class="full_width" align="center" width="100%" bgcolor="#d0d0d0" style=""><div class="div_scale" style="width:600px;">
        <table class="table_scale" width="600" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#f0f0f0" style="padding:0; margin: 0;">
          <tr>
            <!-- START OF LEFT COLUMN-->
            <td class="td_scale" width="600" bgcolor="#fd4326" align="center" valign="top" style="padding: 0px; font-size:14px ; color:#959595; font-family: Arial,sans-serif; line-height: 24px; "><table width="100%" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#fd4326" style="margin: 0;">
                <!-- START OF BANNER-->
                <tr>
                  <td class="center" align="center" valign="top" bgcolor="#fd4326" style="padding:0; font-size: 16px; line-height: 24px; font-family:Lucida Sans Unicode; color:#262626; margin: 0 !important;"><a href="#" style="font-style: normal;"> <img class="img_scale" src="https://github.com/The-web-wolf/deephive/images/sent.svg" width="600" height="240" alt="featured banner" border="0" style="display: block;" /> </a></td>
                </tr>
                <!-- END OF BANNER-->
                <!-- START OF VERTICAL SPACER-->
                <tr>
                  <td height="20" bgcolor="#f0f0f0" style="padding:0; line-height: 0;">&nbsp;</td>
                </tr>
                <!-- END OF VERTICAL SPACER-->
                <!-- START OF HEADING TITLE-->
                <tr>
                  <td class="center" align="center" valign="top" bgcolor="#f0f0f0" style="padding: 0px 20px;  text-shadow: 1px 1px 0px #ffffff;font-size:24px ; color:#444444; font-family: Lucida Sans Unicode; line-height: 34px; ">'.$company.'</td>
                </tr>
                <!-- END OF HEADING TITLE-->
                <!-- START OF VERTICAL SPACER-->
                <tr>
                  <td height="10" bgcolor="#f0f0f0" style="padding:0; line-height: 0;">&nbsp;</td>
                </tr>
                <!-- END OF VERTICAL SPACER-->
                <!-- START OF TEXT-->
                <tr>
                  <td class="center" align="center" valign="top" bgcolor="#f0f0f0" style="padding: 0px 20px;  text-shadow: 1px 1px 0px #ffffff;font-size:13px ; color:#727272; font-family: Arial,sans-serif; line-height: 23px; ">'.$description.'</td>
                </tr>
                <!-- END OF TEXT-->
                <!-- START OF VERTICAL SPACER-->
                <tr>
                  <td height="20" bgcolor="#f0f0f0" style="padding:0; line-height: 0;">&nbsp;</td>
                </tr>
                <!-- END OF VERTICAL SPACER-->
              </table></td>         
      <!-- JUST A VERTICAL SPACER-->
      <div class="div_scale" style="width:600px; display: block; border-bottom: 1px solid #d0d0d0;">
        <table class="table_scale" width="600" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#f9f9f9" style="padding:0; margin: 0;">
          <tr>
            <td class="td_scale" width="600" height="20" bgcolor="#f9f9f9" align="center" valign="middle" style="height: 20px; padding: 0px; font-size:0 ; color:#686868; font-family: Arial,sans-serif; line-height: 0; ">&nbsp;</td>
          </tr>
        </table>
      </div>
      <!-- END OF JUST A VERTICAL SPACER-->
      <!-- JUST A VERTICAL SPACER-->
      <div class="div_scale" style="width:600px; display: block; ">
        <table class="table_scale" width="600" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#f0f0f0" style="padding:0; margin: 0;">

  <tr>
    <td class="full_width" align="center" width="100%" bgcolor="#d0d0d0" style=""><div class="div_scale" style="width:600px;">
        <table class="table_scale" width="" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#353535" style="padding:0; margin: 0;">
          <tr>
            <td class="" align="center" valign="top" width="600" bgcolor="#353535" style=""><table align="center" width="100%">
                  <!-- START OF TEXT-->
                <tr>
                  <td align="center" valign="top" style="border-top: 1px solid #2b2b2b; padding: 40px 20px; font-size:13px ; color:#bbbbbb; font-family: Arial,sans-serif; line-height: 23px; "> Obrigado por comprar na AuroraStore, em breve estaremos lançando nosso site, fique atento para novos descontos e promoções.</td>
                </tr>
                <!-- END OF TEXT-->
                <!-- START OF LOGO-->
                <tr>
                  <td align="center" valign="top" style="border-top: 1px solid #484848; padding: 20px; font-size:13px ; color:#bbbbbb; font-family: Arial,sans-serif; line-height: 23px; "><a href="#" style="font-style: normal;"> </a></td>
                </tr>
                <!-- END OF LOGO-->
              </table></td>
          </tr>
        </table>
      </div></td>
  </tr>
  <!-- END OF FOOTER-->
  <!-- START OF VERTIXAL SPACER BLOCK-->
  <tr>
    <td class="full_width" align="center" width="100%" bgcolor="#d0d0d0" style=""><div class="div_scale" style="width:600px;">
        <table class="table_scale" width="600" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#d0d0d0" style="padding:0; margin: 0;">
          <tr>
            <td class="td_scale" width="600" height="40" bgcolor="#d0d0d0" align="center" valign="middle" style="height: 40px; padding: 0px; font-size:0 ; color:#686868; font-family: Arial,sans-serif; line-height: 0; ">&nbsp;</td>
          </tr>
        </table>
      </div></td>
  </tr>
  <!-- END OF VERTIXAL SPACER BLOCK-->
</table>';

		$mail =mail($to, $subject, $email_content, $email_headers);


}