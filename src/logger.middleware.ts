import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction, response } from 'express';

Injectable()
export class LoggerMiddleware extends Logger {
    private readonly logger = new Logger();

    use(request: Request, response: Response, next: NextFunction) {
        const { protocol, secure, xhr, method, subdomains, originalUrl, params, query, body, fresh, aborted, hostname, ip, ips } = request;
        const userAgent = request.get('user-agent') || '';
        
        request.on('close', () =>  {
            const { statusCode } = response;
            //const contentLength = res.get('content-length');

            this.logger.log(
                `
                Protocol: ${protocol}
                Secure ?: ${secure}
                XML_Request ?: ${xhr}
                Method: ${method}
                Sub-Domains: ${subdomains}
                Original Url: ${originalUrl}
                Params: ${params}
                Query: ${query}
                Body: ${body}
                Status Code: ${statusCode}
                Fresh ?: ${fresh}
                Aborted: ${aborted}
                Hostname: ${hostname}
                IpAddress: ${ip}
                OtherIpAddresses: ${ips}
                UserAgent: ${userAgent}
                `
            )

            const txtObj = { protocol, secure, xhr, method, subdomains, originalUrl, params, query, body, statusCode, fresh, aborted, hostname, ip, ips, userAgent }

            const fs = require('fs');
            fs.appendFile("/home/the-tenth-engineer/Desktop/logTxt", JSON.stringify(txtObj)+'\n\n', function(err) {
                if(err) {
                return console.log(err);
                }
            });
        });
        next();
    }
}

