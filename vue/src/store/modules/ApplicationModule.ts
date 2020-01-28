import { getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { store } from '@/store';

@Module({ dynamic: true, store, name: 'User', stateFactory: true })
class Application extends VuexModule {
  public isLoaded: boolean = false;

  @Mutation
  public setApplicationIsLoaded() {
    this.isLoaded = true;
  }
}

export const ApplicationModule = getModule(Application);
