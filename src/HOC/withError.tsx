import React, { ReactNode } from 'react';

type ErrorTypeProps<T> = { children?: ReactNode } & T

type ErrorState = {
    errorOccured: boolean
}

const withError = <T extends unknown>(Component: React.FC<T>) => {
    return class extends React.Component<ErrorTypeProps<T>, ErrorState> {
        public state = {
            errorOccured: false
        }

        static getDerivedStateFromError(_:Error): ErrorState{
            console.log(_);
            
            return {
                errorOccured: true
            }
        }
    
        componentDidCatch(error:any, errorInfo: any){
            /**
             * This can be log to a backend service
             */
        }

        render() {
            if(this.state.errorOccured){
                return <h4>Robot initialization failed</h4>
    
            }
            return <Component {...{...this.props}}/>
        }

    }
}

export default withError