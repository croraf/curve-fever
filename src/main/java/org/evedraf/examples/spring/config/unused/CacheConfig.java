package org.evedraf.examples.spring.config.unused;


/*import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cache.jcache.JCacheCacheManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.cache.CacheManager;
import javax.cache.Caching;
import javax.cache.configuration.MutableConfiguration;
import javax.cache.expiry.CreatedExpiryPolicy;
import javax.cache.expiry.Duration;


@Configuration
@EnableCaching
public class CacheConfig {

    @Bean ("myCacheManager")
    public JCacheCacheManager cacheManager(){

        CacheManager cacheManager = Caching
                .getCachingProvider("org.ehcache.jsr107.EhcacheCachingProvider")
                .getCacheManager();

        MutableConfiguration<Long, String> configuration =
                new MutableConfiguration<Long, String>()
                        .setTypes(Long.class, String.class)
                        .setStoreByValue(false)
                        .setExpiryPolicyFactory(CreatedExpiryPolicy.factoryOf(Duration.ONE_MINUTE));
        cacheManager.createCache("calculations", configuration);

        return new JCacheCacheManager(cacheManager);
    }


}*/
