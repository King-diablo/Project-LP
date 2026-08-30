const companyName = 'Moneclat';

type IDATA = {
	fullName: string;
};
export const confirmationEmail = (data: IDATA) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>We received your message</title>
</head>

<body style="
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
  font-family: Arial, Helvetica, sans-serif;
  color: #222222;
">

  <table width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center" style="padding: 40px 20px;">

        <table
          width="100%"
          cellpadding="0"
          cellspacing="0"
          border="0"
          style="
            max-width: 600px;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
          "
        >

          <tr>
            <td style="padding: 32px;">

              <h1 style="
                margin: 0 0 20px;
                font-size: 24px;
                color: #111111;
              ">
                We received your message
              </h1>

              <p style="
                margin: 0 0 16px;
                font-size: 16px;
                line-height: 1.6;
              ">
                Hi ${data.fullName},
              </p>

              <p style="
                margin: 0 0 24px;
                font-size: 16px;
                line-height: 1.6;
              ">
                Thank you for contacting us. We've received your
                message and will get back to you as soon as possible.
              </p>

              <p style="
                margin: 0;
                font-size: 16px;
                line-height: 1.6;
              ">
                Best regards,<br />
                The ${companyName} Team
              </p>

            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`;
