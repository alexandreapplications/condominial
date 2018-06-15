import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

export class ConnectionInterceptor implements HttpInterceptor {
    intercept(_request: HttpRequest<any>, _next: HttpHandler): Observable<HttpEvent<any>> {
        const regexReplace = /^{[\d\w]+}/g;
        const replace = regexReplace.exec(_request.url);
        if (replace != null) {
            const regexTag = /[\d\w]+/g;
            const tagValue = regexTag.exec(replace[0])[0];
            const configUrlData = environment.urls[tagValue];
            const url = _request.url.replace(regexReplace, configUrlData.url);
            // if (configUrlData.cache) {
            //     const cacheData = localStorage.getItem(url);
            //     if (cacheData != null) {

            //     }
            // }
            const reqResposta = _request.clone({ url: url });
            return _next.handle(reqResposta);
        }
        return _next.handle(_request);
    }
}
