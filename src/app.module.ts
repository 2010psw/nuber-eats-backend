import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { RestaurantsModule } from './restaurants/restaurants.module';

@Module({
  imports: [GraphQLModule.forRoot({
    autoSchemaFile: true,
    driver: ApolloDriver,
  }),
    RestaurantsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
