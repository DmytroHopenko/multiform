import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"

interface FormProps{
    form: any;
}

export const FirstStep = ({form}: FormProps) => {
    return(
        <div>
            <div>
                <span className="text-denim text-[24px] md:text-[32px] font-bold mb-2">
                    Personal Info
                </span>
                <p className="text-grey text-[16px] font-normal w-[273px] md:w-full">
                Please provide your name, email address, and phone number.
                </p>
            </div>
            <div className="mt-5">
            <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[12px] text-denim">Name</FormLabel>
              <FormControl>
                <Input placeholder="e.g. Stephen King" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[12px] text-denim">Email Address</FormLabel>
              <FormControl>
                <Input placeholder="e.g. stephenking@lorem.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[12px] text-denim">Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="e.g. +1 234 567 890" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
            </div>
        </div>
    )
}