package springreact.practicerestapi.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import springreact.practicerestapi.domain.UserAccount;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JwtTokenProvider {

    public String generateToken(Authentication authentication){
        UserAccount user= (UserAccount) authentication.getPrincipal();
        Date now= new Date(System.currentTimeMillis());
        Date expiry= new Date(now.getTime()+30_000);
        String userID=Long.toString(user.getId());
        Map<String,Object> claims= new HashMap<>();
        claims.put("id",(Long.toString(user.getId())));
        claims.put("username",user.getUsername());
        claims.put("fullname",user.getFullName());
        return Jwts.builder()
                .setSubject(userID)
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(expiry)
                .signWith(SignatureAlgorithm.HS512,"SecretKeyToGenJWTs")
                .compact();
    }
}
